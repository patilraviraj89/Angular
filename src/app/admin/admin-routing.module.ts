import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { LandingComponent } from './landing/landing.component';
import { TproductComponent } from './tproduct/tproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';

const routes: Routes = [
  {path:"",component:LandingComponent ,children:[
    {path:"products", component:ProductsComponent},
    {path:"tproduct",component:TproductComponent},
    {path:"addproduct",component:AddproductComponent}
  ]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
