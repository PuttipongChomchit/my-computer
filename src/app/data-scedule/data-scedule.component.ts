import { Component, ElementRef, Inject, Input } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Scedule } from '../model/scedule';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FirebaseOperation } from '@angular/fire/compat/database/interfaces';

@Component({
  selector: 'app-data-scedule',
  templateUrl: './data-scedule.component.html',
  styleUrls: ['./data-scedule.component.css']
})
export class DataSceduleComponent {

  private basePath = '/note';
  @Input() fileUpload: Scedule | undefined;
  todayDate : Date = new Date();
  elementRef: ElementRef;
  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage,private router: Router,@Inject(ElementRef) elementRef: ElementRef) { 
    this.selectFile();
    this.elementRef = elementRef;
  }
  
  fileUploads: any[] | undefined;
  private i = 0;

  disableStime = true;
  disableEtime = true;

  selectFile(){
    if(this.file.type == "notify"){
      this.disableStime = false;
      this.disableEtime = false;
    }else{
      this.disableStime = true;
      this.disableEtime = true;
    }
  }

  ngOnInit() {
    this.getFileUploads(99).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.fileUploads = fileUploads.reverse();
      this.i = fileUploads.length;
    });
  }
  getFileUploads(numberItems: number): AngularFireList<Scedule> {
    return this.db.list(this.basePath, ref =>
      ref.limitToLast(numberItems).orderByChild('payment'));
  }
  //Delest
  deleteFileUpload(fileUpload: Scedule) {
    this.deleteFileDatabase(fileUpload.key)
      .then(() => {
        this.deleteFileStorage(fileUpload.name);
      })
      .catch(error => console.log(error));
  }
  payment(fire: { key: FirebaseOperation; }) {
    let itemRef = this.db.list('note');
    itemRef.update(fire.key, { payment: 'Paid' });
  }
  private deleteFileDatabase(key: FirebaseOperation | undefined) {
    return this.db.list(this.basePath).remove(key);
  }

  private deleteFileStorage(name: string) {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(name).delete();
  }

  file: FileNote = new FileNote();

  saveFileData() {
    /*
    const splitted = this.file.date.split("-", 3);
    let vDate : number =  Number(splitted[2]);
    let vMonth : number =  Number(splitted[1]);
    let vYear : number =  Number(splitted[0]);*/
    this.fileUpload = new Scedule(
      this.file.type,this.file.activity,  this.file.stime,this.file.etime,this.file.date,this.file.note
    );
    this.db.list(this.basePath).push(this.fileUpload);
    this.file.activity = "";
    this.file.event = "";
    this.file.note = "";
    this.file.stime = "";
    this.file.etime = "";
    this.file.date = "";
  }

  stypeDate = "";
  datepiker(){
      const t = this.elementRef.nativeElement.querySelector('#datepiker');
      this.stypeDate = 
      "top : "+(t.getBoundingClientRect().top + t.scrollHeight)+"px"+
      ";left : "+ t.getBoundingClientRect().left+"px"+
      ";display: block";
  }
  datepikerBlur() {
    //this.stypeDate = "display: none";
  }

  timezoneTH(date : string): Date{
    let text = date.split('-');
    let year : number = +text[0];
    let month : number = +text[1];
    let day : number = +text[2];
    let result = new Date(year+543,month-1,day)
    return result;
  }

  editDate(date : Date){
    let year : string = `${date.getFullYear()}` ,month : string = `${date.getMonth()+1}` ,day : string = `${date.getDate()}`;
    if(+month < 10){
      month = "0"+month;
    }
    if(+day < 10){
      day = "0"+day;
    }
    this.file.date = (year+'-'+month+'-'+day);
  }
}
class FileNote {
  type = "";
  activity = "";
  event = "";
  note = "";
  stime = "";
  etime = "";
  date = "";
}