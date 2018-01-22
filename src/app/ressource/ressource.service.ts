import { Injectable } from '@angular/core';
import { Ressource } from "./ressource";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
@Injectable()
export class RessourceService {

  private apiUrl = 'http://localhost:8080/ressources';
  constructor(private http: Http) { }
  findAll(): Observable<Ressource[]>  {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
 
  findById(id: number): Observable<Ressource> {
    return null;
  }
 
  saveUser(user: Ressource): Observable<Ressource> {
    return null;
  }
 
  deleteUserById(id: number): Observable<boolean> {
    return null;
  }
 
  updateUser(user: Ressource): Observable<Ressource> {
    return null;
  }
}
