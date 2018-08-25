import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../AngularMaterial/angular-material.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    AngularMaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AngularMaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CommonShareModule { }
