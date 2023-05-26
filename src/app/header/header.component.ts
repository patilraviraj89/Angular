import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cart =0;
ngOnInit(): void {
 if (localStorage.getItem("products") ||"[]"){
  let addcart=JSON.parse(localStorage.getItem("products")|| "[]")
  this.cart=addcart.length;

 }
}

}
