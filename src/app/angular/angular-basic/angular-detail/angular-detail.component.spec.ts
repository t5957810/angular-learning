import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDetailComponent } from './angular-detail.component';

xdescribe('AngularDetailComponent', () => {
  let component: AngularDetailComponent;
  let fixture: ComponentFixture<AngularDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
