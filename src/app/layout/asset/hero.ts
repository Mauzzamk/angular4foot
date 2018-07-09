export class Hero {

  public productName: string;
  public productCatagory: string;
  public productClassification: string;
  public productDepartment: string;
  public assetType
  public productTags : Array<string> = [];
  
    constructor( productName : string, productCatagory : string,  productClassification : string,
  productDepartment : string, productTags : Array<string> ) {

    this.productName = productName;
    this.productCatagory = productCatagory;
    this.productClassification = productClassification;
    this.productDepartment = productDepartment;
    this.productTags = productTags;
  
    }
  
  }
  