import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import{LayoutModule} from './layout/layout.module';
import {LoginModule} from './login/login.module'
import { UserService } from './user.service';
import { RouterModule } from '@angular/router';
import { LoginFormComponent } from './login/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [RouterModule.forRoot([
    {path: '', component : LoginFormComponent},
    {path: 'layout', loadChildren: 'app/layout/layout.module#LayoutModule'},
    
]),
    BrowserModule,LayoutModule,LoginModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
