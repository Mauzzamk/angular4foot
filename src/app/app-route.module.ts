import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  { path: '', loadChildren: './layout/layout.module#LayoutModule',canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },

 

 ];

@NgModule({
  imports: [ RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRouteModule { }
