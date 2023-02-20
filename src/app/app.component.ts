import { ElementRef, Inject, Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-computer-server';

  elementRef: ElementRef;
  constructor(@Inject(ElementRef) elementRef: ElementRef,router: Router) { 
    this.elementRef = elementRef;
  }
  
  displayAdmin = true;
  openAdmin(){
    this.displayAdmin = false;
  }
  closeAdmin(){
    this.displayAdmin = true;
  }
}
