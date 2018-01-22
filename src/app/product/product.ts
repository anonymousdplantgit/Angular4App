export class Product {
    productId: number;
    ref: string;
    label: string;
    description: string;
    buyingPrice: number;
    sellingPrice: number;   
    constructor(productId: number, ref: string, label: string,
       description: string,buyingPrice : number,sellingPrice:number
       ){
      this.productId = productId;
      this.ref = ref;
      this.label = label;
      this.description = description;
      this.buyingPrice = buyingPrice;
      this.sellingPrice = sellingPrice;

    }
   
  }