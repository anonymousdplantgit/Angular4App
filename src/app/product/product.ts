export class Product {
    produitId: number;
    ref: string;
    label: string;
    description: string;
    buyingPrice: number;
    sellingPrice: number;   
    constructor(produitId: number, ref: string, label: string,
       description: string,buyingPrice : number,sellingPrice:number
       ){
      this.produitId = produitId;
      this.ref = ref;
      this.label = label;
      this.description = description;
      this.buyingPrice = buyingPrice;
      this.sellingPrice = sellingPrice;

    }
   
  }