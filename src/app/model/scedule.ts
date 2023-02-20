export class Scedule {
    key!: string;
    name!: string;
    url!: string;
  
    type: string;
    activity : string;
    note: string;
    stime: string;
    etime: string;
    date: string;
    everyDay:boolean = false;
    everyWeek:boolean = false;
    everyMonth:boolean = false;
    everyYear:boolean = false;
    scedule:{
      mon:boolean;
      tue:boolean;
      wed:boolean;
      thu:boolean;
      fri:boolean;
      sat:boolean;
      sun:boolean;
    }={
      mon:false,
      tue:false,
      wed:false,
      thu:false,
      fri:false,
      sat:false,
      sun:false
    }
  
    constructor(type: string,activity: string, stime: string,etime: string, date: string, note: string) {
      this.type = type;
      this.activity = activity;
      this.note = note;
      this.stime = stime;
      this.etime = etime;
      this.date = date;
    }

    setScedule(mon : boolean,tue : boolean,wed : boolean,thu : boolean,fri : boolean,sat : boolean,sun : boolean){
      this.scedule = {
        mon:mon,
        tue:tue,
        wed:wed,
        thu:thu,
        fri:fri,
        sat:sat,
        sun:sun
      }
      this.everyDay = false;
      this.everyWeek = false;
      this.everyMonth = false;
      this.everyYear = false;
    }

    setEveryDay(){
      this.everyDay = true;
      this.everyWeek = false;
      this.everyMonth = false;
      this.everyYear = false;
      this.scedule = {
        mon:false,
        tue:false,
        wed:false,
        thu:false,
        fri:false,
        sat:false,
        sun:false
      }
    }
    
    setEveryWeek(){
      this.everyDay = false;
      this.everyWeek = true;
      this.everyMonth = false;
      this.everyYear = false;
      this.scedule = {
        mon:false,
        tue:false,
        wed:false,
        thu:false,
        fri:false,
        sat:false,
        sun:false
      }
    }
    
    setEveryMonth(){
      this.everyDay = false;
      this.everyWeek = false;
      this.everyMonth = true;
      this.everyYear = false;
      this.scedule = {
        mon:false,
        tue:false,
        wed:false,
        thu:false,
        fri:false,
        sat:false,
        sun:false
      }
    }

    setEveryYear(){
      this.everyDay = false;
      this.everyWeek = false;
      this.everyMonth = false;
      this.everyYear = true;
      this.scedule = {
        mon:false,
        tue:false,
        wed:false,
        thu:false,
        fri:false,
        sat:false,
        sun:false
      }
    }
}