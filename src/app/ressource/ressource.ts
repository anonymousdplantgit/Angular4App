
export class Ressource {
 
    ressourceId: number;
    firstName: string;
    lastName: string;
    code: string;
   
    constructor(ressourceId: number, firstName: string, lastName: string, code: string){
      this.ressourceId = ressourceId;
      this.firstName = firstName;
      this.lastName = lastName;
      this.code = code;
    }
   
  }