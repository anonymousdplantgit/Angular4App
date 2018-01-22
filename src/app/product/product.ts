import { Categorie } from "../categorie/categorie";


export class Product {
 
    productId: number;
    ref: string;
    label: string;
    description: string;
    buyingPrice: number;
    sellingPrice: number;
    categorie : Categorie
   
    constructor(productId: number, ref: string, label: string,
       description: string,buyingPrice : number,sellingPrice:number,
       categorie : Categorie){
      this.productId = productId;
      this.ref = ref;
      this.label = label;
      this.description = description;
      this.buyingPrice = buyingPrice;
      this.sellingPrice = sellingPrice;
      this.categorie = categorie;
    }
   
  }