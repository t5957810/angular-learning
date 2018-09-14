import { TestBed, inject } from '@angular/core/testing';
import * as _ from 'lodash';
import { AngularTestService } from './angular-test.service';
import { HttpClient } from '@angular/common/http';

describe('AngularTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularTestService]
    });
  });

  it('should be created', inject([AngularTestService], (service: AngularTestService) => {
    expect(service).toBeTruthy();
  }));


  it('測試angularTestService 數字相加功能', () => {
    // Arrange 準備的資料
    const num1 = 1;
    const num2 = 5;
    const exp = 6;
    // const angularTestService = new AngularTestService();
    // spyOn(angularTestService, 'addTwoNumbers').and.callThrough();


    // Act 實際執行測試單元
    // const actual = angularTestService.addTwoNumbers(num1, num2);

    // Assert 驗證結果是否符合預期
    // expect(actual).toBe(  exp);
    // expect(angularTestService.addTwoNumbers).toHaveBeenCalled();

  });
});
