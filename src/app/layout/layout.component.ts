import { Component, OnInit, ChangeDetectorRef, OnDestroy, Inject, ViewChild, HostListener } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher

  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
   }

  ngOnInit() {

  }

  goTop() {
    $('section').animate({ scrollTop: 0 }, 'slow');
    return false;
  }

  ngOnDestroy(): void {
     this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
