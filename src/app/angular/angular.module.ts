import { NgModule } from '@angular/core';
import { AngularRoutingModule } from './angular-routing.module';
import { AngularCLIComponent } from './angular-cli/angular-cli.component';
import { AngularBasicComponent } from './angular-basic/angular-basic.component';
import { CommonShareModule } from '../shared-modules/common-share/common-share.module';
import { ReactFormComponent } from './react-form/react-form.component';
import { AngularDetailComponent } from './angular-basic/angular-detail/angular-detail.component';
import { AngularAdvanceComponent } from './angular-advance/angular-advance.component';
import { AngularDynamicComponent } from './angular-dynamic/angular-dynamic.component';
import { AdHostDirective } from './angular-dynamic/ad-host.directive';
import { DynamicAdComponent } from './angular-dynamic/dynamic-ad/dynamic-ad.component';
import { AngularDynamicFormsComponent } from './angular-dynamic-forms/angular-dynamic-forms.component';
import { AngularTranslateComponent } from './angular-translate/angular-translate.component';
import { AngularTestComponent } from './angular-test/angular-test.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { HighlightJsModule } from 'ngx-highlight-js';


@NgModule({
  imports: [
    CommonShareModule,
    AngularRoutingModule,
    HighlightJsModule
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
    AngularDynamicFormsComponent,
    AngularTranslateComponent,
    AngularTestComponent,
    RxjsComponent
  ],
  entryComponents: [ DynamicAdComponent]
})
export class AngularModule { }
