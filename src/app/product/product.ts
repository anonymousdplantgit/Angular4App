export class Product {
    produitId: number;
    ref: string;
    label: string;
    description: string;
    prixAchat: number;
    prixVente: number;   
    constructor(produitId: number, ref: string, label: string,
       description: string,prixAchat : number,prixVente:number
       ){
      this.produitId = produitId;
      this.ref = ref;
      this.label = label;
      this.description = description;
      this.prixAchat = prixAchat;
      this.prixVente = prixVente;

    }
   
  }