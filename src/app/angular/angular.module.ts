import { NgModule } from '@angular/core';
import { AngularRoutingModule } from './angular-routing.module';
import { AngularCLIComponent } from './angular-cli/angular-cli.component';
import { AngularBasicComponent } from './angular-basic/angular-basic.component';
import { CommonShareModule } from '../shared-modules/common-share/common-share.module';
import { ReactFormComponent } from './react-form/react-form.component';
import { AngularDetailComponent } from './angular-basic/angular-detail/angular-detail.component';
import { GoTopDirective } from '../go-top.directive';
import { AngularAdvanceComponent } from './angular-advance/angular-advance.component';
import { AngularDynamicComponent } from './angular-dynamic/angular-dynamic.component';
import { AdHostDirective } from './angular-dynamic/ad-host.directive';
import { DynamicAdComponent } from './angular-dynamic/dynamic-ad/dynamic-ad.component';
import { AngularDynamicFormsComponent } from './angular-dynamic-forms/angular-dynamic-forms.component';

@NgModule({
  imports: [
    CommonShareModule,
    AngularRoutingModule
  ],
  declarations: [
    AngularCLIComponent,
    AngularBasicComponent,
    ReactFormComponent,
    AngularDetailComponent,
    AngularAdvanceComponent,
    AngularDynamicComponent,
    AdHostDirective,
    DynamicAdComponent,
    AngularDynamicFormsComponent
  ],
  entryComponents: [ DynamicAdComponent]
})
export class AngularModule { }
