import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-angular-detail',
  templateUrl: './angular-detail.component.html',
  styleUrls: ['./angular-detail.component.css']
})
export class AngularDetailComponent implements OnInit, AfterViewInit, AfterContentInit {
  @Input() data;
  @Output() chooseValue = new EventEmitter<any>();

  constructor() { }

  ngAfterContentInit() {
    console.log('AngularDetailComponent 子元件發生ngAfterContentInit');
  }


  ngAfterViewInit() {
    console.log('AngularDetailComponent 子元件發生ngAfterViewInit');
  }
  ngOnInit() {
    console.log('AngularDetailComponent 子元件發生ngOnInit');
  }

}
