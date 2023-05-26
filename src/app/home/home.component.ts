import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  result:any;
  category:any;

  constructor(private api:ApiService,private route:ActivatedRoute){
    this.category =this.route.snapshot.paramMap.get("category")
  }
  ngOnInit(): void {
 this.api.get("products").subscribe((result:any)=>{
  this.result = result;
 })
  }

}
