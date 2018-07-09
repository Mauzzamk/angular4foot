import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AddAssetComponent } from '../../add-asset/add-asset.component';



@Component({
  selector: 'app-asset-message',
  templateUrl: './asset-message.component.html',
  styleUrls: ['./asset-message.component.scss']
})
export class AssetMessageComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModalWithComponent() {
   
    this.bsModalRef = this.modalService.show(AddAssetComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}


