import { Component, ElementRef, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar-menu',
  templateUrl: './bar-menu.component.html',
  styleUrls: ['./bar-menu.component.css']
})
export class BarMenuComponent implements OnInit {

  @Input() items : any[] = [];
  @Output() menu = new EventEmitter<string>();
  
  elementRef: ElementRef;
  constructor(@Inject(ElementRef) elementRef: ElementRef,router: Router) { 
    this.elementRef = elementRef;
  }

  ngOnInit(): void {
  }

  barLeft = "";
  barRight = "";
  barSelectorColor = "";

  clickLeft(){
    this.barLeft = "display : none;";
    this.barRight = "display : block;";
    this.barSelectorColor = "animation : moveLeft 2s;animationFillMode : forwards;";
  }
  clickRight(){
    this.barLeft = "display : block;";
    this.barRight = "display : none;";
    this.barSelectorColor = "right: -"+this.elementRef.nativeElement.querySelector('#barSelectorColor').scrollWidth+"px;animation : moveRight 2s;animationFillMode : forwards;";
  }

  selectMenu(path : string){
    this.menu.emit(path);
  }
}
