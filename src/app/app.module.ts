import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { CommonShareModule } from './shared-modules/common-share/common-share.module';
import { FooterComponent } from './layout/footer/footer.component';
import { GoTopDirective } from './go-top.directive';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    NotFoundComponent,
    FooterComponent,
    GoTopDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
