import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDir]'
})
export class CustomDirDirective {

  constructor(private elementRef:ElementRef) { 
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    this.elementRef.nativeElement.style.textDecoration = 'line-through';
  }

}
