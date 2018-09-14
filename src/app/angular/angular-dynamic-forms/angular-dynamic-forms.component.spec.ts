import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDynamicFormsComponent } from './angular-dynamic-forms.component';

xdescribe('AngularDynamicFormsComponent', () => {
  let component: AngularDynamicFormsComponent;
  let fixture: ComponentFixture<AngularDynamicFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularDynamicFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDynamicFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
