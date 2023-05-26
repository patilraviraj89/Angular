import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsdetailsComponent } from './productsdetails/productsdetails.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './admin/landing/landing.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  // {path:"",component:homeComponent,pathMatch:'full'},
  {path:"",component:HomeComponent},
  {path:"products",component:ProductsComponent},
  {path:"products/:category",component:ProductsComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"productsdetails/:id",component:ProductsdetailsComponent},
  {path:"login",component:LoginComponent},
  {path:"cart",component:CartComponent},
  {path:"Checkout",component:CheckoutComponent},
  {path:"admin",loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  {path:"**",redirectTo:"/"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
