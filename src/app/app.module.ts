import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { AngularRaveModule } from 'angular-rave';
// import { RavepaymentModule } from 'angular4-ravepayment';  // Ayeni Olusegun

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    // RavepaymentModule
    AngularRaveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
