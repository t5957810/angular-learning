import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AngularTestService {

  constructor(private httpClient: HttpClient) { }

  addTwoNumbers(num1: number, num2: number) {
    return num1 + num2;
  }
}
