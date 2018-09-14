import { NgModule } from '@angular/core';
import { CommonShareModule } from '../shared-modules/common-share/common-share.module';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  imports: [
    CommonShareModule,
    RouterModule,
    ScrollToModule.forRoot()
  ],
  declarations: [
    LayoutComponent,
    FooterComponent
  ]
})
export class LayoutModule {}
