import { Component, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseElemental } from '../model/base-elemental';

@Component({
  selector: 'app-data-base-elemental',
  templateUrl: './data-base-elemental.component.html',
  styleUrls: ['./data-base-elemental.component.css']
})
export class DataBaseElementalComponent implements OnInit {
  
  private basePath = '/note';
  @Input() fileUpload: BaseElemental | undefined;
  todayDate : Date = new Date();
  elementRef: ElementRef;

  ngOnInit(): void {
  }

  item1 : string | undefined;
	item2 : string | undefined;
	item3 : string | undefined;
	item4 : string | undefined;
	
	text1 : number = 0;
	text2 : number = 0;
	text3 : number = 0;
	text4 : number = 0;
	
	result1 : string = "";
	result2 : string = "";
	result3 : string = "";
	result4 : string = "";

  atk : number[] = [19,18,16,14];
	p_atk : number[] = [5.8,5.3,4.7,4.1];
	def : number[] = [19,18,16,14];
	p_def : number[] = [7.3,6.6,5.8,5.1];
	hp : number[] = [299,269,239,209];
	p_hp : number[] = [5.8,5.3,4.7,4.1];
	em : number[] = [23,21,19,16];
	er : number[] = [6.5 , 5.8 , 5.2 , 4.5];
	cr : number[] = [3.9,3.5,3.1,2.7];
	cd : number[] = [7.8 , 7 , 6.2 , 5.4];

  constructor(router: Router,@Inject(ElementRef) elementRef: ElementRef) { 
    this.elementRef = elementRef;
  }
	
	innerElement(id : string, valueToSelect : string) {    
	    let element = this.elementRef.nativeElement.querySelector('#'+id);
	    element.innerHTML = valueToSelect;
	}
	
	submitRamkArtifact(){
		this.item1 = this.elementRef.nativeElement.querySelector('#item1').value;
		this.item2 = this.elementRef.nativeElement.querySelector('#item2').value;
		this.item3 = this.elementRef.nativeElement.querySelector('#item3').value;
		this.item4 = this.elementRef.nativeElement.querySelector('#item4').value;

    this.text1 = this.elementRef.nativeElement.querySelector('#text1').value;
		this.text2 = this.elementRef.nativeElement.querySelector('#text2').value;
		this.text3 = this.elementRef.nativeElement.querySelector('#text3').value;
		this.text4 = this.elementRef.nativeElement.querySelector('#text4').value;

		if(this.item1 == "atk") {
			this.result1 = this.rankArtifact(1,this.rateArtifact(this.atk, this.text1));
		}else if(this.item2 == "atk") {
			this.result2 = this.rankArtifact(1,this.rateArtifact(this.atk, this.text2));
		}else if(this.item3 == "atk") {
			this.result3 = this.rankArtifact(1,this.rateArtifact(this.atk, this.text3));
		}else if(this.item4 == "atk") {
			this.result4 = this.rankArtifact(1,this.rateArtifact(this.atk, this.text4));
		}
		
		if(this.item1 == "p_atk") {
			this.result1 = this.rankArtifact(2,this.rateArtifact(this.p_atk, this.text1));
		}else if(this.item2 == "p_atk") {
			this.result2 = this.rankArtifact(2,this.rateArtifact(this.p_atk, this.text2));
		}else if(this.item3 == "p_atk") {
			this.result3 = this.rankArtifact(2,this.rateArtifact(this.p_atk, this.text3));
		}else if(this.item4 == "p_atk") {
			this.result4 = this.rankArtifact(2,this.rateArtifact(this.p_atk, this.text4));
		}
		
		if(this.item1 == "def") {
			this.result1 = this.rankArtifact(1,this.rateArtifact(this.def, this.text1));
		}else if(this.item2 == "def") {
			this.result2 = this.rankArtifact(1,this.rateArtifact(this.def, this.text2));
		}else if(this.item3 == "def") {
			this.result3 = this.rankArtifact(1,this.rateArtifact(this.def, this.text3));
		}else if(this.item4 == "def") {
			this.result4 = this.rankArtifact(1,this.rateArtifact(this.def, this.text4));
		}
		
		if(this.item1 == "p_def") {
			this.result1 = this.rankArtifact(2,this.rateArtifact(this.p_def, this.text1));
		}else if(this.item2 == "p_def") {
			this.result2 = this.rankArtifact(2,this.rateArtifact(this.p_def, this.text2));
		}else if(this.item3 == "p_def") {
			this.result3 = this.rankArtifact(2,this.rateArtifact(this.p_def, this.text3));
		}else if(this.item4 == "p_def") {
			this.result4 = this.rankArtifact(2,this.rateArtifact(this.p_def, this.text4));
		}

		if(this.item1 == "hp") {
			this.result1 = this.rankArtifact(1,this.rateArtifact(this.hp, this.text1));
		}else if(this.item2 == "hp") {
			this.result2 = this.rankArtifact(1,this.rateArtifact(this.hp, this.text2));
		}else if(this.item3 == "hp") {
			this.result3 = this.rankArtifact(1,this.rateArtifact(this.hp, this.text3));
		}else if(this.item4 == "hp") {
			this.result4 = this.rankArtifact(1,this.rateArtifact(this.hp, this.text4));
		}
		
		if(this.item1 == "p_hp") {
			this.result1 = this.rankArtifact(2,this.rateArtifact(this.p_hp, this.text1));
		}else if(this.item2 == "p_hp") {
			this.result2 = this.rankArtifact(2,this.rateArtifact(this.p_hp, this.text2));
		}else if(this.item3 == "p_hp") {
			this.result3 = this.rankArtifact(2,this.rateArtifact(this.p_hp, this.text3));
		}else if(this.item4 == "p_hp") {
			this.result4 = this.rankArtifact(2,this.rateArtifact(this.p_hp, this.text4));
		}
		
		if(this.item1 == "em") {
			this.result1 = this.rankArtifact(2,this.rateArtifact(this.em, this.text1));
		}else if(this.item2 == "em") {
			this.result2 = this.rankArtifact(2,this.rateArtifact(this.em, this.text2));
		}else if(this.item3 == "em") {
			this.result3 = this.rankArtifact(2,this.rateArtifact(this.em, this.text3));
		}else if(this.item4 == "em") {
			this.result4 = this.rankArtifact(2,this.rateArtifact(this.em, this.text4));
		}
		
		if(this.item1 == "er") {
			this.result1 = this.rankArtifact(2,this.rateArtifact(this.er, this.text1));
		}else if(this.item2 == "er") {
			this.result2 = this.rankArtifact(2,this.rateArtifact(this.er, this.text2));
		}else if(this.item3 == "er") {
			this.result3 = this.rankArtifact(2,this.rateArtifact(this.er, this.text3));
		}else if(this.item4 == "er") {
			this.result4 = this.rankArtifact(2,this.rateArtifact(this.er, this.text4));
		}
		
		if(this.item1 == "cr") {
			this.result1 = this.rankArtifact(3,this.rateArtifact(this.cr, this.text1));
		}else if(this.item2 == "cr") {
			this.result2 = this.rankArtifact(3,this.rateArtifact(this.cr, this.text2));
		}else if(this.item3 == "cr") {
			this.result3 = this.rankArtifact(3,this.rateArtifact(this.cr, this.text3));
		}else if(this.item4 == "cr") {
			this.result4 = this.rankArtifact(3,this.rateArtifact(this.cr, this.text4));
		}
		
		if(this.item1 == "cd") {
			this.result1 = this.rankArtifact(3,this.rateArtifact(this.cd, this.text1));
		}else if(this.item2 == "cd") {
			this.result2 = this.rankArtifact(3,this.rateArtifact(this.cd, this.text2));
		}else if(this.item3 == "cd") {
			this.result3 = this.rankArtifact(3,this.rateArtifact(this.cd, this.text3));
		}else if(this.item4 == "cd") {
			this.result4 = this.rankArtifact(3,this.rateArtifact(this.cd, this.text4));
		}

    this.innerElement('result1' , this.result1);
    this.innerElement('result2' , this.result2);
    this.innerElement('result3' , this.result3);
    this.innerElement('result4' , this.result4);
	}

	rateArtifact(filter :number[],stat : number): number[]{
		let checked = true;
		let key :number[] = [];
		for(let a = 0;a < 4 && checked;a++) {
			for(let b = 0;b < 4 && checked;b++) {
				for(let c = 0;c < 4 && checked;c++) {
					for(let d = 0;d < 4 && checked;d++) {
						for(let e = 0;e < 4 && checked;e++) {
							for(let f = 0;f < 4 && checked;f++) {
								if(stat == filter[a]) {
									key = [a];
									checked = false;
								}
								else if(stat == (filter[a] + filter[b])) {
									key = [a,b];
									checked = false;
								}
								else if(stat == (filter[a] + filter[b] + filter[c])) {
									key = [a,b,c];
									checked = false;
								}
								else if(stat == (filter[a] + filter[b] + filter[c] + filter[d])) {
									key = [a,b,c,d];
									checked = false;
								}
								else if(stat == (filter[a] + filter[b] + filter[c] + filter[d] + filter[e])) {
									key = [a,b,c,d,e];
									checked = false;
								}
								else if(stat == (filter[a] + filter[b] + filter[c] + filter[d] + filter[e] + filter[f])) {
                  key = [a,b,c,d,e,f];
									checked = false;
								}
							}
						}
					}
				}
			}
		}
		return key;
	}

	rankArtifact (filter : number,key : number[]): string {
		let text : string = "";

    if(key.length == 0){
      return "loading";
    }
    
		if(filter == 1) {
			text = "low";
		}else if(filter == 2) {
			if(key.length > 2) {
				text = "high";
			}else if(key.length == 2) {
				if(key[1] == 0) {
					text = "high";
				}else if(key[1] == 1 || key[1] == 2) {
					text = "medium";
				}else if(key[1] == 3){
					text = "low";
				}
			}else {
				text = "high";
			}
		}else if(filter == 3) {
			if(key.length > 2) {
				text = "Rare";
			}else if(key.length == 2) {
				if(key[1] == 0) {
					text = "very high";
				}else if(key[1] == 1 || key[1] == 2) {
					text = "high";
				}else if(key[1] == 3){
					text = "medium";
				}
			}else {
				text = "medium";
			}
		}
		return text;
	}
}