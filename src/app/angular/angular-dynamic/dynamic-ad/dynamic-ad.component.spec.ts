import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicAdComponent } from './dynamic-ad.component';

describe('DynamicAdComponent', () => {
  let component: DynamicAdComponent;
  let fixture: ComponentFixture<DynamicAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
