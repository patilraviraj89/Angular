import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  category:any;
  result:any;
  // data:any;
  constructor(private api:ApiService,private route:ActivatedRoute){
    this.category =this.route.snapshot.paramMap.get("category");
  }
  ngOnInit(): void {
    this.api.get("products").subscribe((result:any)=>{
      // console.log(result);
      this.result=result;

      if(this.category !=null)
      {
        this.result =this.result.filter((data:any)=>{
          if(data.cateogry == this.category)
          return data;
        })
      }
    })
  }

}
