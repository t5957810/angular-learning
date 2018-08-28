import { TestBed, inject } from '@angular/core/testing';

import { AngularDynamicFormsService } from './angular-dynamic-forms.service';

describe('AngularDynamicFormsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularDynamicFormsService]
    });
  });

  it('should be created', inject([AngularDynamicFormsService], (service: AngularDynamicFormsService) => {
    expect(service).toBeTruthy();
  }));
});
