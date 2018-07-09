import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AssetComponent } from './asset.component';
import { AssetMessageComponent } from './asset-message/asset-message/asset-message.component';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { AddasmodalComponent } from './addasmodal/addasmodal.component';



const routes: Routes = [
  {
      path: '',component : AssetComponent,
      children: [
        { path: 'assetmessage', component: AssetMessageComponent },
       {path: 'addasset', component: AddAssetComponent },
       {path: 'addmodal', component: AddasmodalComponent },
      ]
  }
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  declarations: [],
  exports : [RouterModule]
})
export class AssetRouteModule { }
