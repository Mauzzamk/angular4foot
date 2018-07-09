import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetRouteModule } from './asset-route.module';
import { AssetComponent } from './asset.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { AssetMessageComponent } from './asset-message/asset-message/asset-message.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddasmodalComponent } from './addasmodal/addasmodal.component';
import { TagInputModule } from 'ngx-chips';

@NgModule({
  imports: [
    CommonModule,AssetRouteModule,ReactiveFormsModule,FormsModule,ModalModule.forRoot(),TagInputModule
  ],
  declarations: [AssetComponent,AddAssetComponent,AssetMessageComponent,AddasmodalComponent]
})
export class AssetModule { }
