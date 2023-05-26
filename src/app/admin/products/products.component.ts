import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  constructor(private router:Router){
    if(localStorage.getItem("usertype")==null){
      this.router.navigate(['/']);
    }
  }
  ngOnInit(): void {
    console.log("Component Loaded");

  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/']);

  }

}


