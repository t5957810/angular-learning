import { Injectable } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AngularDynamicFormsService {

  constructor() { }

  convertQuestionToFormGroup(questions: any[]) {
    const group: any = {};

    questions.forEach(question => {
      group[question.key] = new FormControl(question.value || '', question.required ? Validators.required : null);
    });

    return new FormGroup(group);
  }
}
