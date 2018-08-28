import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-ad',
  templateUrl: './dynamic-ad.component.html',
  styleUrls: ['./dynamic-ad.component.css']
})
export class DynamicAdComponent implements OnInit {
  data: any[];
  constructor() { }

  ngOnInit() {
  }

}
