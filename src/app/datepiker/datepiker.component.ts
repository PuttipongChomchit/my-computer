import { Component, ElementRef, Inject, Input, OnInit ,OnChanges, SimpleChanges, HostListener, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-datepiker',
  templateUrl: './datepiker.component.html',
  styleUrls: ['./datepiker.component.css']
})
export class DatepikerComponent implements OnInit ,OnChanges{
  
  @Input() items : string = "";
  @Output() piker_date = new EventEmitter<Date>();

  stypeDate = "display: none";
  elementRef: ElementRef;
  constructor(@Inject(ElementRef) elementRef: ElementRef) { 
    this.elementRef = elementRef;
  }

  ngOnInit(): void {
    this.years = this.ComputeRange(300,this.year,this.years);
    this.getDates();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const itemsValue = changes['items'];
    this.datepiker(itemsValue.currentValue);
  }

  datepiker(id : string){
    this.stypeDate = id;
  }

  stypeDateBlur(){
    this.stypeDate = "display: none";
  }
  //Date
  toDate = new Date();
  toDay = this.toDate.getDate();
  month = this.toDate.getMonth();
  year = this.toDate.getFullYear();
  scrollDatepiker = new Date(this.year,this.month,this.toDay);
  selectDatepiker = new Date(this.year,this.month,this.toDay);
  months = ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฏาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'];
  
  cd: Calendar[] = [];
  getDates(){
    const calendarDate = new Date(this.year,this.month,1);
    this.cd = [];
    for(let i = 1; i <= 35;i++){
      let date = new Date(this.year,this.month,i - calendarDate.getDay());
      let stype = "xdsoft_date xdsoft_day_of_week"+date.getDay();

      this.scrollDatepiker = new Date(this.year,this.month,this.toDay);
      this.year = this.scrollDatepiker.getFullYear();
      this.month = this.scrollDatepiker.getMonth();
      this.toDay = this.scrollDatepiker.getDate();

      if(this.month != date.getMonth()){
        stype += " xdsoft_other_month";
      }
      if(date.getDay() == 0 || date.getDay() == 6){
        stype += " xdsoft_weekend";
      }
      if(date.getDate() == this.selectDatepiker.getDate() && date.getMonth() == this.selectDatepiker.getMonth() &&date.getFullYear() == this.selectDatepiker.getFullYear()){
        stype += " xdsoft_current";
      }
      this.cd.push(new Calendar(date.getDay(), date.getDate(), date.getMonth(), date.getFullYear(),stype));
    }
  }

  getCalendar(week : number):Calendar[]{
    let calendar : Calendar[] = [];
    for(let i = 0; i < 7;i++){
      calendar.push(this.cd[i+(week*7)]);
    }
    return calendar;
  }

  scroll : number = 0;

  scrollerBoxMonth = "margin-top : 0px";
  scrollerBoxYear = "margin-top : 0px";
  
  @HostListener("wheel", ["$event"])
  public onScroll(event: WheelEvent) {
    this.scroll = event.deltaY;
    let scrollbar = this.elementRef.nativeElement.querySelectorAll('.xdsoft_scrollbar');
    let scroller = this.elementRef.nativeElement.querySelectorAll('.xdsoft_scroller');
    let scrollerBox = this.elementRef.nativeElement.querySelectorAll('.xdsoft_scroller_box');
    let label_select = this.elementRef.nativeElement.querySelectorAll('.xdsoft_option');
    let n_label_select : number = 0;
    let box_count = 0;
    
    for(let i = 0;i < label_select.length;i++){
      if(label_select[i].scrollHeight != 0){
        box_count++;
      }
    }
    do{
        n_label_select++;
    }while(label_select[n_label_select].scrollHeight == 0);
    let num_slect : number = label_select[n_label_select].scrollHeight;
    
    if(this.stypeMonth == "display: block;"){
      let monthScrollbar = scrollbar[0];
      let monthScroller = scroller[0];
      let monthScrollerBox = scrollerBox[0];
      
      let maximumOffset = monthScrollbar.offsetHeight - monthScroller.offsetHeight;
      let maximumOffsetBox = (num_slect*box_count) - monthScrollerBox.offsetHeight;
      
      //alert(maximumOffset);
      let scrollerMonth : number = +getComputedStyle(monthScroller).getPropertyValue('margin-top').replace('px',"");

      if(this.scroll > 0){
        scrollerMonth += 24;
      }else if(this.scroll < 0){
        scrollerMonth -= 24;
      }
      let area : number = (maximumOffset / maximumOffsetBox) * scrollerMonth;
      if(scrollerMonth < 0){
        monthScroller.style.setProperty('margin-top', `${0}px`);
      }else if(scrollerMonth > maximumOffset){
        monthScroller.style.setProperty('margin-top', `${maximumOffset}px`);
        this.scrollerBoxMonth = `margin-top : -${maximumOffsetBox}px`;
      }else{
        monthScroller.style.setProperty('margin-top', `${area}px`);
        this.scrollerBoxMonth = `margin-top : -${this.ratio(maximumOffsetBox,maximumOffset,scrollerMonth)}px`;
      }
    }else if(this.stypeYear == "display: block;"){
      let yearScrollbar = scrollbar[1];
      let yearScroller = scroller[1];
      let yearScrollerBox = scrollerBox[1];
      
      let maximumOffset = yearScrollbar.offsetHeight - yearScroller.offsetHeight;
      let maximumOffsetBox = (num_slect*box_count) - yearScrollerBox.offsetHeight;
      let scrollerY : number = +getComputedStyle(yearScroller).getPropertyValue('margin-top').replace('px',"");
      if(this.scroll > 0){
        scrollerY += 24;
      }else if(this.scroll < 0){
        scrollerY -= 24;
      }

      if(scrollerY < 0){
        yearScroller.style.setProperty('margin-top', `${0}px`);
      }else if(scrollerY > maximumOffset){
        yearScroller.style.setProperty('margin-top', `${maximumOffset}px`);
        this.scrollerBoxYear = `margin-top : -${maximumOffsetBox}px`;
      }else{
        yearScroller.style.setProperty('margin-top', `${scrollerY}px`);
        this.scrollerBoxYear = `margin-top : -${this.ratio(maximumOffsetBox,maximumOffset,yearScroller)}px`;
      }
    }else{
      if(this.scroll > 0){
        this.nextMonth();
      }else if(this.scroll < 0){
        this.prevMonth();
      }
    }
    this.scroll = 0;
  }

  ratio(x : number,y : number,pushX : number): number{
    let pushY : number = 0;
    pushY = -((x-pushX) / (x/y) - y)
    return pushY;
  }
  prevMonth(){
    this.scrollBlur()
    this.month--;
    this.getDates();
  }
  nextMonth(){
    this.scrollBlur()
    this.month++;
    this.getDates();
  }

  dateToDay(){
    this.scrollBlur()
    this.toDay = this.toDate.getDate();
    this.month = this.toDate.getMonth();
    this.year = this.toDate.getFullYear();
    this.getDates();
  }

  stypeMonth = "display: none;";
  scrollBlur(){
    this.stypeMonth = "display: none;";
    this.stypeYear = "display: none;";
  }

  monthFocus(){
    this.scrollBlur()
    this.stypeMonth = "display: block;";
    this.scrollerBoxMonth = `margin-top : -${24*this.month}px`;
  }
  monthHome(){
    let n_label_select : number = 0;
    let label_select = this.elementRef.nativeElement.querySelectorAll('.xdsoft_option');
    
    do{
      n_label_select++;
    }while(label_select[n_label_select].scrollHeight == 0);
    let num_slect : number = label_select[n_label_select].scrollHeight;
  }

  stypeYear = "display: none;";
  yearFocus(){
    this.scrollBlur()
    this.stypeYear = "display: block;";
  }

  selectDate(n : number , type : string){
    switch(type){
      case "month": return (this.month == n) ? "xdsoft_option xdsoft_current" : "xdsoft_option";
      case "year" : return (this.year == n) ? "xdsoft_option xdsoft_current" : "xdsoft_option";
      default: return "xdsoft_option";
    }
  }

  years : number[] = [];
  
  ComputeRange = (N: number , start : number, Result: number[] = []): number[] => {
    if (Result.length === N) {
        return Result
    }
    return this.ComputeRange(N,start, [...Result, (start-(N/2))+Result.length])
  }

  chengeDatepiker(date : string){
    let txt = date.split('-');
    this.selectDatepiker = new Date(+txt[0], +txt[1],+txt[2]);
    this.getDates();
    this.stypeDate = "display : none";
    this.items = "";
    this.piker_date.emit(this.selectDatepiker);
  }

  test(){

  }
}
class Calendar {
  day :number;
  date : number;
  month : number;
  year : number;
  stype : string;
  constructor(day: number, date: number, month: number,year: number,stype : string) {
    this.day = day;
    this.date = date;
    this.month = month;
    this.year = year;
    this.stype = stype;
  }
}