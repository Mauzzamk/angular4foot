import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { Routes,RouterModule } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      component: LayoutComponent,
      children: [
          { path: '', redirectTo: 'dashboard',pathMatch: 'prefix' },
          { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
          { path: 'asset', loadChildren: './asset/asset.module#AssetModule' }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [],
  exports: [RouterModule]
})
export class LayoutRouteModule { }
