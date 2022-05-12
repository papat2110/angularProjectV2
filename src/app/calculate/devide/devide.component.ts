import { Component, OnInit } from '@angular/core';
import { CalculateService } from '../../services/calculate.service';

@Component({
  selector: 'app-devide',
  templateUrl: './devide.component.html',
  styleUrls: ['./devide.component.css']
})
export class DevideComponent implements OnInit {

  result!:number;

  constructor(
    private cal: CalculateService
  ) { }

  ngOnInit(): void {
  }

  calDevide(a:number,b:number){
    this.result = this.cal.devide(a,b);
    console.log(this.result)
    // this.result = a+b;
    // return a+b;
  }

}
