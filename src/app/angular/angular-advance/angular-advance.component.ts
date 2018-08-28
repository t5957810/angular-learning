import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-angular-advance',
  templateUrl: './angular-advance.component.html',
  styleUrls: ['./angular-advance.component.css']
})
export class AngularAdvanceComponent implements OnInit {
  @ViewChild('btn') btn: ElementRef;
  constructor() { }

  ngOnInit() {

  }

  getViewChild() {
    console.log('btn = ', this.btn)
  }

}
