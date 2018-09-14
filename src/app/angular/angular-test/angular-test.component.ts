import { Component, OnInit } from '@angular/core';
import { AngularTestService } from './angular-test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-angular-test',
  templateUrl: './angular-test.component.html',
  styleUrls: ['./angular-test.component.css']
})
export class AngularTestComponent implements OnInit {

  constructor(
    private angularTestService: AngularTestService
  ) { }

  ngOnInit() {
  }

  addTwoNumbers(num1: number, num2: number) {
    return num1 + num2;
  }

}
