import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products:any;
  result:any;
  total = 0;

  ngOnInit(): void {
    this.products= JSON.parse(localStorage.getItem("products")||"[]");
    this.calculatetotal();
  }


  // setcart(){
  //   this.cart =this.cartservices.getcart(){}
  // }

  cancleCart(product:any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result:any) => {
      if (result.isConfirmed) {
        this.products = this.products.filter((p:any)=>{
          if(product.id != p.id){
            return p;
          }
        })
        localStorage.setItem("products", JSON.stringify(this.products));
        this.calculatetotal();
      }
    })


  }

        calculatetotal(){
          this.total=0;
          this.products.map((products:any)=>{
            this.total += products.quantity*products.price;
          })
        }


   }




      // localStorage.setItem("products", JSON.stringify(this.products));
      // this.calculateTotal();





