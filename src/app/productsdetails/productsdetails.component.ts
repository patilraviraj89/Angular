import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-productsdetails',
  templateUrl: './productsdetails.component.html',
  styleUrls: ['./productsdetails.component.css']
})
export class ProductsdetailsComponent implements OnInit {
  [x: string]: any;

  id: any;
  product: any;
  products = new Array();
  quantity = 1;

  constructor(private api: ApiService, router: Router, private route: ActivatedRoute, private toastr: ToastrService) {
    this.id = this.route.snapshot.paramMap.get("id");
  }


  ngOnInit(): void {
    if (this.id != null) {
      this.api.get("/products/" + this.id).subscribe((result: any) => {
        this.product = result;
      })
    }
    this.products = JSON.parse(localStorage.getItem("products") || "[]");
  }

  addtocart() {
    let add = {
      id: this.id,
      name: this.product.name,
      mrp: this.product.mrp,
      price: this.product.price,
      quantity: this.quantity
    }
    let added = false;

    this.products.forEach(element => {
      if(element.id == add.id){
        added = true;
      }
    });

    if(added == false){
      this.products.push(add);
      localStorage.setItem("products", JSON.stringify(this.products));
      this.toastr.success('Product Added To Cart', 'Success');
    }
    else{

      this.toastr.error('Product Already Added To Cart', 'Error');
    }
  }

  increment() {
    this.quantity++;
  }

  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}




