import { Directive, HostBinding, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Directive({
  selector: '[appGoTop]'
})
export class GoTopDirective {
  @HostBinding('style.color') myColor = 'black';
  @HostListener('click', ['$event']) myClick($event) {
    console.log('$event= ', $event);

  }
  constructor(
    @Inject(DOCUMENT) private document: Document,

  ) { }

}
