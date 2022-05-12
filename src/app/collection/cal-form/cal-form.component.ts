import { Component, OnInit } from '@angular/core';
import { CalculateService } from 'src/app/services/calculate.service';

@Component({
  selector: 'app-cal-form',
  templateUrl: './cal-form.component.html',
  styleUrls: ['./cal-form.component.css']
})
export class CalFormComponent implements OnInit {

  constructor(
    private cal: CalculateService
  ) { }

  ngOnInit(): void {
  }
}
