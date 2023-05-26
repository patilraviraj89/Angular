import { Component, HostListener, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare var Razorpay:any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {
  userdata:any;
  total = 0;
  constructor(private api:ApiService){}
  products:any
  id:any;
  order:any;
  options = {
    "key": "rzp_live_Ay9af2dQeUH8A6", // Enter the Key ID generated from the Dashboard
    "amount": "200", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "IGAP Technologies", //your business name
    "description": "order placed on ecommerce",
    "image": "https://igaptechnologies.com/assets/logo/igap.png",
    "order_id":"", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    "handler": function (response:any){
       console.log(response);
       var event = new CustomEvent('payment.success',{detail:response, bubbles:true,cancelable:true});
       window.dispatchEvent(event);
      // alert(response.razorpay_payment_id);
      // alert(response.razorpay_order_id);
      // alert(response.razorpay_signature)
    },

    "prefill": {
        "name": "", //your customer's name
        "email": "",
        "contact": ""
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
  ngOnInit(): void {
    this.products= JSON.parse(localStorage.getItem("products")||"[]");
    this.calculatetotal();

  }

  // this.userdata = new FormGroup({
  //   firstname: new FormControl("",Validators.compose([Validators.required])),
  //   lastname: new FormControl("",Validators.compose([Validators.required])),
  //   address: new FormControl("",Validators.compose([Validators.required])),
  //   City: new FormControl("",Validators.compose([Validators.required])),
  //    email: new FormControl("",Validators.compose([Validators.required,Validators.email])),
  //   zipcode: new FormControl("",Validators.compose([Validators.required])),


  // })


  calculatetotal(){
    this.total=0;
    this.products.map((products:any)=>{
      this.total += products.quantity*products.price;
    })
  }
  placeorder(){
    this.order = {...this.products.value};
    this.api.post("orders",this.order).subscribe((result:any)=>{
      this.id = result.id;
      console.log(this.id);
    //start payment gateway
    this.options.amount="200",//(this.total *100).toString();
    this.options.prefill.name =this.order.name;
    this.options.prefill.email =this.order.email;
    this.options.prefill.contact =this.order.mobileno;
    var razorpay =new Razorpay(this.options)
    razorpay.open();
    razorpay.on('payment failed',(response:any)=>{
       alert("payment Failed");
    });
    })
  }

  @HostListener('window:payment.success',['$event'])
  onpaymentsuccess(event:any):void{
    console.log("payment received");
    this.api.put("/orders/"+ this.id,{...this.order,status:"paid"}).subscribe((result:any)=>{
      console.log("status updated");
      console.log(result);
    })
  }

}
