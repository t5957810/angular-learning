import { NgModule } from '@angular/core';
import { TypescriptPageRoutingModule } from './typescript-page-routing.module';
import { CommonShareModule } from '../shared-modules/common-share/common-share.module';
import { BasicComponent } from './basic/basic.component';
import { FeatureComponent } from './feature/feature.component';

@NgModule({
  imports: [
    CommonShareModule,
    TypescriptPageRoutingModule
  ],
  declarations: [
    BasicComponent,
    FeatureComponent
  ]
})
export class TypescriptPageModule { }
