import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-tproduct',
  templateUrl: './tproduct.component.html',
  styleUrls: ['./tproduct.component.css']
})
export class TproductComponent implements OnInit {
  abs:any;
  id: any;
constructor(private api:ApiService, private route : ActivatedRoute){



// alert(this.id)
}

ngOnInit(): void {
  this.load();
}

load(){
  this.api.get("products").subscribe((result:any)=>{
    this.abs=result;
    // console.log(result);
  })
}

delete(id:any){
  this.api.delete("products/"+id).subscribe((result:any)=>{
    this.load();
  })
 }
 edit(id:any ){
  this.api.put("products/"+id, id).subscribe((result:any)=>{
  })
 }
}

