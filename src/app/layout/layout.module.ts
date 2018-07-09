import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRouteModule } from './layout-route.module';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppSidebarComponent } from './components/app-sidebar/app-sidebar.component';



@NgModule({
  imports: [LayoutRouteModule,
    CommonModule,
  ],
  declarations: [LayoutComponent,AppHeaderComponent,AppSidebarComponent]
})
export class LayoutModule { }
