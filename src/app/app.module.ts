import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TagInputModule } from 'ngx-chips';

import { AppComponent } from './app.component';

import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';


import { AppRouteModule } from './app-route.module';
import { AuthGuard } from './auth.guard';
import { BookServiceService } from './service/book-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ToastrUtil } from './service/toastr.service';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouteModule,BrowserModule,BrowserAnimationsModule,ToastrModule.forRoot(),HttpClientModule,TagInputModule
  ],
  providers: [AuthGuard,BookServiceService,ToastrUtil],
  bootstrap: [AppComponent]
})
export class AppModule { }