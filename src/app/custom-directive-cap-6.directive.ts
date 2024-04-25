import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDirectiveCap6]'
})
export class CustomDirectiveCap6Directive {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('');
  }

  private highlight(color : string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
