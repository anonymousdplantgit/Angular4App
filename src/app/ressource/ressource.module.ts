import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RessourceRoutingModule } from './ressource-routing.module';
import { RessourceListComponent } from './ressource-list/ressource-list.component';
import { RessourceCreateComponent } from './ressource-create/ressource-create.component';

@NgModule({
  imports: [
    CommonModule,
    RessourceRoutingModule
  ],
  declarations: [RessourceListComponent, RessourceCreateComponent]
})
export class RessourceModule { }
