import {Routes, RouterModule} from '@angular/router';
import { NgModule} from '@angular/core';
import { LayoutComponent } from './layout/components/layout/layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'angular', pathMatch: 'full' },
      {
        path: 'typescript',
        loadChildren: './typescript-page/typescript-page.module#TypescriptPageModule'
      },
      {
        path: 'angular',
        loadChildren: './angular/angular.module#AngularModule'
      }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes, {
        enableTracing: false,
      })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}

