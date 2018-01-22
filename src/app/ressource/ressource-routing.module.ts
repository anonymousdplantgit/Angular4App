import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RessourceListComponent } from './ressource-list/ressource-list.component';
import { RessourceCreateComponent } from './ressource-create/ressource-create.component';

const routes: Routes = [
  {path: 'ressource', component: RessourceListComponent},
  {path: 'ressource/create', component: RessourceCreateComponent},
  {path: 'ressource/edit/:id', component: RessourceCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RessourceRoutingModule { }
