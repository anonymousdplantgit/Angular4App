import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorieManagementComponent } from './categorie-management/categorie-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { CategorieRoutingModule } from './categorie-routing.module';


@NgModule({
  imports: [
    CommonModule,
    CategorieRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng4LoadingSpinnerModule.forRoot()
    
  ],
  declarations: [CategorieManagementComponent]
})
export class CategorieModule { }
