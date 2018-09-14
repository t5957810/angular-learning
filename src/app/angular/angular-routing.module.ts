import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularCLIComponent } from './angular-cli/angular-cli.component';
import { AngularBasicComponent } from './angular-basic/angular-basic.component';
import { AngularAdvanceComponent } from './angular-advance/angular-advance.component';
import { AngularDynamicComponent } from './angular-dynamic/angular-dynamic.component';
import { AngularDynamicFormsComponent } from './angular-dynamic-forms/angular-dynamic-forms.component';
import { AngularTranslateComponent } from './angular-translate/angular-translate.component';
import { AngularTestComponent } from './angular-test/angular-test.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  { path: '', redirectTo: 'basic', pathMatch: 'full' },
  { path: 'basic', component: AngularBasicComponent },
  { path: 'cli', component: AngularCLIComponent },
  { path: 'advance', component: AngularAdvanceComponent },
  { path: 'dynamicComponent', component: AngularDynamicComponent },
  { path: 'dynamicForms', component: AngularDynamicFormsComponent },
  { path: 'translate', component: AngularTranslateComponent },
  { path: 'test', component: AngularTestComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'rxjs/:id', component: RxjsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
