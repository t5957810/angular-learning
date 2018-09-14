import { Component, OnInit, ChangeDetectorRef, OnDestroy, Inject, ViewChild, HostListener } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { LayoutService } from '../../service/layout.service';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy {
  hccg;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private layoutService: LayoutService,
    private scrollToService: ScrollToService

  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
   }

   public triggerScrollTo() {
    // console.log('scroll')
    const config: ScrollToConfigOptions = {
      // easing: 'easeOutElastic',
      duration: 500,
      target: 'destination'
    };
    this.scrollToService.scrollTo(config);
  }


  ngOnInit() {
    this.layoutService.getApiData().subscribe(
      data => {
        // console.log('getApiData= ', data);
        this.hccg = data;
      }
    );
    // this.layoutService.getTaipeiApiData().subscribe(
    //   data => {
    //      console.log('getTaipeiApiData= ', data);
    //   }
    // );
  }


  ngOnDestroy(): void {
     this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
