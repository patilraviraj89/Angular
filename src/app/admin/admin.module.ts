import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductsComponent } from './products/products.component';
import { LandingComponent } from './landing/landing.component';
import { TproductComponent } from './tproduct/tproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';


@NgModule({
  declarations: [
    ProductsComponent,
    LandingComponent,
    TproductComponent,
    AddproductComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
