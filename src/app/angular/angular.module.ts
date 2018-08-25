import { NgModule } from '@angular/core';
import { AngularRoutingModule } from './angular-routing.module';
import { AngularCLIComponent } from './angular-cli/angular-cli.component';
import { AngularBasicComponent } from './angular-basic/angular-basic.component';
import { CommonShareModule } from '../shared-modules/common-share/common-share.module';
import { ReactFormComponent } from './react-form/react-form.component';

@NgModule({
  imports: [
    CommonShareModule,
    AngularRoutingModule
  ],
  declarations: [
    AngularCLIComponent,
    AngularBasicComponent,
    ReactFormComponent
  ]
})
export class AngularModule { }
