import { Component, OnInit } from '@angular/core';
import { CalculateService } from '../../services/calculate.service';

@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.css']
})
export class MultiplyComponent implements OnInit {

  result!:number;
  a!:String;

  constructor(
    private cal: CalculateService
  ) { }

  ngOnInit(): void {
    this.a = "multi"
  }

  calMulti(a:number,b:number){
    this.result = this.cal.multiply(a,b);
    console.log(this.result)
    // this.result = a+b;
    // return a+b;
  }

}
