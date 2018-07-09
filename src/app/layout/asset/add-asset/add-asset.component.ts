import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Hero } from '../hero';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-add-asset',
 
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.scss'],

})
export class AddAssetComponent implements OnInit {
  heroForm: FormGroup;
  model: Hero; 
  submittedModel: Hero; 
  catagory: string[];
  department:string[];
  classification:string[];
  items: Array<any>;
  
  submitted: boolean = false;


  @ViewChild('AccUserImg') AccUserImage;
  AccUserImageFile: File;
  
  constructor(private formBuilder: FormBuilder,public bsModalRef: BsModalRef) { }
  closeBtnName: string;
  ngOnInit() {
      this.model = new Hero('', 'Dr IQ', 'Really Smart', 'Chuck Overstreet', ['iq@superhero.com']);
      
      this.catagory = ['Really Smart', 'Super Flexible', 
                     'Hypersound', 'Weather Changer'];  
                     this.classification = ['Really Smart', 'Super Flexible', 
                     'Hypersound', 'Weather Changer'];    
                     this.department = ['Really Smart', 'Super Flexible', 
                     'Hypersound', 'Weather Changer'];                       
                     
      this.heroForm = this.formBuilder.group({
        name:     [this.model.productName, Validators.required],
        catagory: [this.model.productCatagory, Validators.required],
        classification:    [this.model.productClassification, Validators.required],
        department:    [this.model.productDepartment, Validators.required],
        tags:    [this.model.productTags, Validators.required],
        assettype:    [this.model.assetType, Validators.required],
        mediaFile : null

      });
  }

  onSubmit({ value, valid }: { value: Hero, valid: boolean }) {
    this.submitted = true;
    this.submittedModel = value;
  }

  public CreateAccContact(value) {
    console.log(JSON.stringify(value));
    const Image = this.AccUserImage.nativeElement;
    if (Image.files && Image.files[0]) {
      this.AccUserImageFile = Image.files[0];
    }
    const ImageFile: File = this.AccUserImageFile;
    console.log(ImageFile);
  }
}