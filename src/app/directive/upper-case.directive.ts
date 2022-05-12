import { transformAll } from '@angular/compiler/src/render3/r3_ast';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUpperCase]'
})
export class UpperCaseDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.setuppercase("red");
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setuppercase("black");
  }

  private setuppercase(color: string) {
    this.el.nativeElement.style.color = color;
  }

}
