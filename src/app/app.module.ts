import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { RessourceModule } from './ressource/ressource.module';
import { HttpModule } from '@angular/http';
import { ProductModule } from './product/product.module';
import { CategorieModule } from './categorie/categorie.module';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
    

    
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    UserModule,
    RessourceModule,
    ProductModule,
    CategorieModule,
    Ng4LoadingSpinnerModule,
    BrowserModule,BrowserAnimationsModule, ToastModule.forRoot()
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
