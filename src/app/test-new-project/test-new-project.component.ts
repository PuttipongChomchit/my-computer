import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-new-project',
  templateUrl: './test-new-project.component.html',
  styleUrls: ['./test-new-project.component.css']
})
export class TestNewProjectComponent implements OnInit {

  constructor() { }

  time : number[] = [];

  ngOnInit(): void {
    this.time = this.ComputeRange(24,this.time);
    this.time[24] = 0;
  }
  
  ComputeRange = (N: number, Result: number[] = []): number[] => {
    if (Result.length === N) {
        return Result
    }
    return this.ComputeRange(N, [...Result, Result.length])
  }

  ConvertTime(time:number) : string{
    let text : string = "";
    if(time < 10){
      text = "0"+time;
    }else{
      text = ""+time;
    }

    return text+":00";
  }

}
