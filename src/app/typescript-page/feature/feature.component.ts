import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  js_description?: string;
  type?: string;
  ts_description?: string;
}

export class Greeter {
  greeting: string;       // 預設為公開屬性
  private title?: string; // 宣告為私有屬性
  constructor(message: string, title: string) {
      this.greeting = message;
      this.title = title;
  }
  greet() {
    return '你好!, ' + this.title;
  }
}


const ELEMENT_DATA: PeriodicElement[] = [
  {type: '動態型別', js_description: '使用var宣告的變數可為任意型別', ts_description: 'var a: any;'},
  {type: '數值型別', js_description: 'Number', ts_description: 'var a: number;'},
  {type: '字串型別', js_description: 'String', ts_description: 'var a: string;'},
  {type: '布林型別', js_description: 'Boolean', ts_description: 'var a: boolean;'},
  {type: '未定義型別', js_description: 'undefined', ts_description: 'var a: void;'},
  {type: '空值型別', js_description: 'null', ts_description: 'var a: void;'},
  {type: '陣列型別', js_description: 'Array', ts_description: 'var a: number[]; let x: [string, number]; let a: Array<number>=[1, 2, 3]'},
  {type: '列舉型別', js_description: '無', ts_description: 'enum Color{ Red, Green, Blue}; let c: Color = Color.Green;'}
];

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  displayedColumns: string[] = ['type', 'js_description', 'ts_description'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
    const a: PeriodicElement = {};
    const test = new Greeter('Hello World', 'Edward');
    console.log(test);
    console.log(test.greet());
  }

  test(val: PeriodicElement) {
    console.log(val);
  }

}
