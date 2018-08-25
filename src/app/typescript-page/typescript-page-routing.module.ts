import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { FeatureComponent } from './feature/feature.component';

const routes: Routes = [
  { path: '', redirectTo: 'basic', pathMatch: 'full' },
  { path: 'basic', component: BasicComponent },
  { path: 'feature', component: FeatureComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypescriptPageRoutingModule { }
