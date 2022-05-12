import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  constructor() { }

  plus(a:number,b:number){
    return a+b;
  }

  minus(a:number,b:number){
    return a-b;
  }

  multiply(a:number,b:number){
    return a*b;
  }

  devide(a:number,b:number){
    return a/b;
  }
}
