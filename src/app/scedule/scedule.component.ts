import { Component, ElementRef, Inject } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Scedule } from '../model/scedule';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scedule',
  templateUrl: './scedule.component.html',
  styleUrls: ['./scedule.component.css']
})
export class SceduleComponent{

  private basePath = '/note';
  todayDate : Date = new Date();
  elementRef: ElementRef;
  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage,private router: Router,@Inject(ElementRef) elementRef: ElementRef) { 
    this.elementRef = elementRef;
  }
  
  scedule: any[] | undefined;
  private i = 0;

  ngOnInit() {
    this.getScedule(99).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(scedule => {
      this.scedule = scedule;
      this.i = scedule.length;
      this.checkDate(scedule);
    });
  }
  getScedule(numberItems: number): AngularFireList<Scedule> {
    return this.db.list(this.basePath, ref =>
      ref.limitToLast(numberItems).orderByChild('date'));
  }

  checkDate(scedule : any[]){
    let date : number = this.todayDate.getDate();
    let month : number = this.todayDate.getMonth()+1;
    let year : number = this.todayDate.getFullYear();
    scedule.forEach(e =>{
      const splitted = e.date.split("-", 3);
      let vDate : number =  Number(splitted[2]);
      let vMonth : number =  Number(splitted[1]);
      let vYear : number =  Number(splitted[0]);
      if(e.type != "note"){
        if((year > vYear) || (year == vYear && month > vMonth) || (year == vYear && month == vMonth && date > vDate)){
          scedule.splice(e.key,1);
        }
      }
    })
  }

  dateToString(item : string,scedule: any[],key : number) : string{
    const splitted = item.split("-", 3);
    let monthText = "";
    switch(splitted[1]) {
      case "01": monthText = "มกราคม";break;
      case "02": monthText = "กุมภาพันธ์";break;
      case "03": monthText = "มีนาคม";break;
      case "04": monthText = "เมษายน";break;
      case "05": monthText = "พฤษภาคม";break;
      case "06": monthText = "มิถุนายน";break;
      case "07": monthText = "กรกฏาคม";break;
      case "08": monthText = "สิงหาคม";break;
      case "09": monthText = "กันยายน";break;
      case "10": monthText = "ตุลาคม";break;
      case "11": monthText = "พฤศจิกายน";break;
      case "12": monthText = "ธันวาคม";break;
    }
    return splitted[2] + " " + monthText + " " + (+splitted[0]+543);
  }

  dateStyle(date : string,type : string) : string{
    let style = "";
    const splitted = date.split("-", 3);
    let vDate : number =  Number(splitted[2]);
    let vMonth : number =  Number(splitted[1]);
    let vYear : number =  Number(splitted[0]);
    if(type == "notify"){
      if(new Date(vYear,vMonth-1,vDate-30).getTime() < this.todayDate.getTime() && this.todayDate.getTime() < new Date(vYear,vMonth-1,vDate+1).getTime()){
        for(let i = 0; i <= 30;i = i+5){
          if(new Date(vYear,vMonth-1,vDate-i+1).getTime() > this.todayDate.getTime()){
            style = "background-color: hsla("+(i*3)+", 85%,65%,1)";
          }
        }
      }
    }
    return style;
  }

  leftDate(textDate : string) : string{
    let list = textDate.split('-');
    let date = new Date(+list[0],+list[1] - 1,+list[2]);
    date.setDate(date.getDate())

    let toDate = new Date();
    toDate.setDate(toDate.getDate())
    toDate.setHours(0);
    toDate.setMinutes(0);
    toDate.setMilliseconds(0);
    toDate.setSeconds(0);

    let result = (date.getTime()/(24*60*60*1000)) - (toDate.getTime()/(24*60*60*1000));
    return `${result}`
    //`${date.getTime()}` +" : "+ `${toDate.getTime()}`//;
  }

}