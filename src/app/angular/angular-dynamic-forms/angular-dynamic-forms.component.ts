import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, FormControl, Validators } from '@angular/forms';
import { AngularDynamicFormsService } from './angular-dynamic-forms.service';

export interface QuestionBaseType<T> {
  key: string;
  label: string;
  controlType: 'textbox' | 'dropdown';
  value: T;
  required: boolean;
}

export class QuestionBase<T> implements QuestionBaseType<T> {
  key: string;
  label: string;
  controlType: 'textbox' | 'dropdown';
  value: T;
  required: boolean;

  constructor(options: QuestionBaseType<T>) {
    this.key = options.key;
    this.label = options.label;
    this.controlType = options.controlType;
    this.value = options.value;
    this.required = options.required;
  }
}

export interface TextboxQuestionType extends QuestionBase<string> {
  type: 'text' | 'password' | 'email';
  placeholder?: string;
}

export class TextboxQuestion extends QuestionBase<string> {
  type = 'text';
  placeholder = '';

  constructor(options: TextboxQuestionType) {
    super(options);
    this.type = options.type;
    this.placeholder = options.placeholder;
  }
}

export interface DropdownQuestionType extends QuestionBase<number> {
  options: { key: number; value: string }[];
}

export class DropdownQuestion extends QuestionBase<number> {
  options: { key: number; value: string }[] = [];

  constructor(options: DropdownQuestionType) {
    super(options);
    this.options = options.options;
  }
}


@Component({
  selector: 'app-angular-dynamic-forms',
  templateUrl: './angular-dynamic-forms.component.html',
  styleUrls: ['./angular-dynamic-forms.component.css']
})
export class AngularDynamicFormsComponent implements OnInit {
    questionModel = [
    new TextboxQuestion({
      key: 'name',
      label: '姓名',
      value: null,
      controlType: 'textbox',
      required: true,
      type: 'text',
      placeholder: '請輸入姓名'
    }),
    new DropdownQuestion({
      key: 'interest',
      label: '興趣',
      value: 1,
      controlType: 'dropdown',
      required: false,
      options: [{ key: 0, value: 'Angular' }, { key: 1, value: 'React' }, { key: 2, value: 'Vue' }]
    })
  ];
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private angularDynamicFormsService: AngularDynamicFormsService
  ) { }

  ngOnInit() {
    this.form = this.angularDynamicFormsService.convertQuestionToFormGroup(this.questionModel);
  }

  textboxQuestion(key: string): TextboxQuestion {
    return this.questionModel.filter(question => question.key === key)[0] as TextboxQuestion;
  }

  getFormControl(key): AbstractControl {
    return this.form.get(key);
  }

  dropdownQuestion(key: string): DropdownQuestion {
    return this.questionModel.filter(question => question.key === key)[0] as DropdownQuestion;
  }

  submitData() {
    console.log(this.form.value);
  }

}
