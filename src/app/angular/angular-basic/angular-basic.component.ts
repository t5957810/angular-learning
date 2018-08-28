import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-angular-basic',
  templateUrl: './angular-basic.component.html',
  styleUrls: ['./angular-basic.component.css']
})
export class AngularBasicComponent implements OnInit, AfterViewInit, AfterContentInit {
  environmentName = environment.envName;

  fatherArray = [
    {id: 1, name: '園丁'},
    {id: 2, name: '律師'},
    {id: 3, name: '祭司'},
    {id: 4, name: '盲女'},
    {id: 5, name: '前鋒'},
    {id: 6, name: '傭兵'},
    {id: 7, name: '空軍'},
    {id: 8, name: '魔術師'},
    {id: 9, name: '冒險家'},
    {id: 10, name: '機械師'},
    {id: 11, name: '慈善家'},
    {id: 12, name: '醫生'},
    {id: 13, name: '幸運兒'}
  ];
  constructor( public snackBar: MatSnackBar) { }

  ngAfterContentInit() {
    console.log('AngularBasicComponent 父元件發生ngAfterContentInit');
  }
  ngAfterViewInit() {
    console.log('AngularBasicComponent 父元件發生ngAfterViewInit');
  }

  doChoose($event) {
    this.openSnackBar($event.name);
  }

  openSnackBar(message) {
    this.snackBar.open('兒子傳回選擇值: ' + message, '', {
      duration: 2000
    });
  }
  ngOnInit() {
    console.log('AngularBasicComponent 父元件發生ngOnInit');
  }

}
