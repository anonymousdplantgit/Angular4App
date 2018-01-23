import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { FournisseurRoutingModule } from './fournisseur-routing.module';
import { FournisseurManagementComponent } from './fournisseur-management/fournisseur-management.component';

@NgModule({
  imports: [
    CommonModule,
    FournisseurRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  declarations: [FournisseurManagementComponent]
})
export class FournisseurModule { }
