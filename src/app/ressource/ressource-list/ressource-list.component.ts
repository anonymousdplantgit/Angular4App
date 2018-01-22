import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ressource } from "../ressource";
import { RessourceService } from "../ressource.service";
@Component({
  selector: 'app-ressource-list',
  templateUrl: './ressource-list.component.html',
  styleUrls: ['./ressource-list.component.css'],
  providers: [RessourceService]
})
export class RessourceListComponent implements OnInit {
  private ressources: Ressource[];
  constructor(private router: Router,private ressourceService: RessourceService) { }

  ngOnInit() { //when component loading get all users and set the users[]
    this.getAllRessources();
  }
 
  getAllRessources() {
    this.ressourceService.findAll().subscribe(
      ressources => {
        this.ressources = ressources;
        console.log(ressources);
      },
      err => {
        console.log(err);
      }
 
    );
  }

  redirectNewUserPage() {
    this.router.navigate(['/ressource/create']);
  }
 
  editUserPage(ressource: Ressource) {
    if (ressource) {
      this.router.navigate(['/ressource/edit', ressource.ressourceId]);
    }
  }
 
  deleteUser(ressource: Ressource) {
    console.log('Delete ressource');
  }

}
