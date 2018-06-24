import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { UserService } from './user.service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { Router, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,FooterComponent,HeaderComponent,LoginFormComponent, DashboardComponent
  ],
  imports: [

RouterModule.forRoot([{
path : 'dashboard' , component : DashboardComponent

}]),

    BrowserModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
