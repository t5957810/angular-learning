import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularCLIComponent } from './angular-cli/angular-cli.component';
import { AngularBasicComponent } from './angular-basic/angular-basic.component';

const routes: Routes = [
  { path: '', redirectTo: 'basic', pathMatch: 'full' },
  { path: 'basic', component: AngularBasicComponent },
  { path: 'cli', component: AngularCLIComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
