import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ToastrUtil {

  constructor(private tostr : ToastrService) { }

  showSuccess(){

    this.tostr.success("Success")

  }

  showError(){

    this.tostr.error("Error")

  }

  showWarn(){

    this.tostr.info("Info")

  }

}
