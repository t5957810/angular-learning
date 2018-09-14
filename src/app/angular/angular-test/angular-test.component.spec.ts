import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {} from 'jasmine';
import { AngularTestComponent } from './angular-test.component';
import {HttpClientModule } from '@angular/common/http';

describe('AngularTestComponent', () => {
  let component: AngularTestComponent;
  let fixture: ComponentFixture<AngularTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularTestComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('測試angularTestComponent 功能', () => {
    const service = jasmine.createSpyObj('cService', ['addTwoNumbers']);
    // const component = new AngularTestComponent(service, httpService);

  });

});
