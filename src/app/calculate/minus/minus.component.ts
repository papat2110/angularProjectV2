import { Component, OnInit, ElementRef } from '@angular/core';
import { CalculateService } from '../../services/calculate.service';

@Component({
  selector: 'app-minus',
  templateUrl: './minus.component.html',
  styleUrls: ['./minus.component.css']
})
export class MinusComponent implements OnInit {

  result!:number;

  constructor(
    private cal: CalculateService
  ) { }

  ngOnInit(): void {
  }

  calMinus(a:number,b:number){
    this.result = this.cal.minus(a,b);
    console.log(this.result)
    // this.result = a+b;
    // return a+b;
  }

  changeBackground(element: any){
    element.style.backgroundColor = 'black';
  }

}
