import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  use?: string;
  cli?: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {use: '查看目前Angular版本資訊', cli: 'ng v'},
  {use: '使用別的埠號啟動', cli: 'ng serve --port 8080'},
  {use: '建立一個Angular專案', cli: 'ng new project-name'},
  {use: '建立包含css,html,spec.ts,ts等四隻檔案的Component，預設會自動將component import到app.module.ts裡',
    cli: 'ng g c component-name， 不想自動import可以多加--skip-import'},
  {use: '建立一個Service', cli: 'ng g s service-name'},
  {use: '建立一個Module', cli: 'ng g m module-name，使用ng g m module-name --routing可建立有routing的Module'},
  {use: '建立一個Pipe', cli: 'ng g pipe pipe-name'},
  {use: '建立一個Class', cli: 'ng g class class-name'},
  {use: '建立一個interface', cli: 'ng g i interface-name'},
  {use: '建立一個Directive', cli: 'ng g d directive-name'},
  {use: '建立一個Enum', cli: 'ng g enum enum-name'},
  {use: '打包程式，預設會將程式放到dist目錄下', cli: 'ng build，可以加--prod切換成prod模式'},
];

@Component({
  selector: 'app-angular-cli',
  templateUrl: './angular-cli.component.html',
  styleUrls: ['./angular-cli.component.css']
})
export class AngularCLIComponent implements OnInit {
  displayedColumns: string[] = ['use', 'cli'];
  dataSource = ELEMENT_DATA;


  constructor() { }

  ngOnInit() {
  }

}
