import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDynamicComponent } from './angular-dynamic.component';

describe('AngularDynamicComponent', () => {
  let component: AngularDynamicComponent;
  let fixture: ComponentFixture<AngularDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
