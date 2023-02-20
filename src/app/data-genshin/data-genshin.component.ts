import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-genshin',
  templateUrl: './data-genshin.component.html',
  styleUrls: ['./data-genshin.component.css']
})
export class DataGenshinComponent {
  
  path : string = "test";
  private basePath = '/note';
  data_menu : any[] = [{
    name : 'Base Elemental',
    url : 'genshin_base_elemental'
  }];

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage, router: Router) { 

  }

  selectMenu(menu : any){
    alert(menu);
    this.path = menu;
  }

}