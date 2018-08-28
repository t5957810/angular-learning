import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularCLIComponent } from './angular-cli/angular-cli.component';
import { AngularBasicComponent } from './angular-basic/angular-basic.component';
import { AngularAdvanceComponent } from './angular-advance/angular-advance.component';
import { AngularDynamicComponent } from './angular-dynamic/angular-dynamic.component';
import { AngularDynamicFormsComponent } from './angular-dynamic-forms/angular-dynamic-forms.component';

const routes: Routes = [
  { path: '', redirectTo: 'basic', pathMatch: 'full' },
  { path: 'basic', component: AngularBasicComponent },
  { path: 'cli', component: AngularCLIComponent },
  { path: 'advance', component: AngularAdvanceComponent },
  { path: 'dynamicComponent', component: AngularDynamicComponent },
  { path: 'dynamicForms', component: AngularDynamicFormsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
