import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[app-myhighlight]'
})
export class MyhighlightDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.background = 'gray';
  }

}
