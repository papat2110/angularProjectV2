import { Component, OnInit } from '@angular/core';
import { CalculateService } from '../../services/calculate.service';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.css']
})
export class PlusComponent implements OnInit {

  result!:number;

  constructor(
    private cal: CalculateService
  ) { }

  ngOnInit(): void {
  }
 
  calPlus(a:number,b:number){
    this.result = this.cal.plus(a,b);
    console.log(this.result)
    // this.result = a+b;
    // return a+b;
  }
}
