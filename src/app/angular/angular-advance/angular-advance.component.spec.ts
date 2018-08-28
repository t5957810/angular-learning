import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAdvanceComponent } from './angular-advance.component';

describe('AngularAdvanceComponent', () => {
  let component: AngularAdvanceComponent;
  let fixture: ComponentFixture<AngularAdvanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularAdvanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
