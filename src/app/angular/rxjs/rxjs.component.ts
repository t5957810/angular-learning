import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent, interval, merge, range, concat, timer, of, Subscription, Observable } from 'rxjs';
import { filter, take, tap, delay, map, mapTo, share, switchMap, concatMap, debounceTime, exhaustMap, startWith } from 'rxjs/operators';
import { LayoutService } from '../../layout/service/layout.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']

})
export class RxjsComponent implements OnInit, AfterViewInit {
  @ViewChild('filterInput') filterInput: NgModel;
  constructor(
    private layoutService: LayoutService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  list: any;
  asyncList$: Observable<any>;

  hccgList$: Observable<any>;
  street1$: Observable<any>;
  street2$: Observable<any>;

  ngAfterViewInit(): void {
    this.asyncList$ = this.layoutService.getTaipeiApiData()
    .pipe(
    );



  }


  ngOnInit() {

    // 建立 Observable
    // const click$ = fromEvent(document, 'click');
    // const sub = click$.pipe(
    //   filter(
    //     (event: MouseEvent) => {
    //       if (  event.clientX < 100 && event.clientY > 100) {
    //         return true;
    //       } else if ( event.clientY < 100 ) {
    //         return false;
    //       }
    //     })
    // ).subscribe(
    //   (event: MouseEvent) => {
    //       console.log('click!', event);
    //   }
    // );


    // interval(1000).subscribe(val => { console.log(val); });




    // 找出中山南路的資料
    // this.street1$ = this.asyncList$
    // .pipe( map(
    //   list => list.filter( data => data['路名'] === '中山南路' )
    // ));

    // 找出信義路的資料
    // this.street2$ = this.asyncList$
    // .pipe( map(
    //   list => list.filter( data => data['路名'] === '信義路' )
    // ));


  }

}
