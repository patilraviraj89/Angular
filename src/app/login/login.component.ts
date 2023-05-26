import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formdata:any;
  id:any;

  constructor(private router:Router){}

ngOnInit(): void {
  this.formdata = new FormGroup({
    username:new FormControl("",Validators.compose([Validators.required])),
    password:new FormControl("",Validators.compose([Validators.required]))
  });
}
sumbit(data:any){
  if(data.username == 'admin' && data.password == "admin"){
    // alert("login succesfully")
    localStorage.setItem("usertype","admin")

    this.router.navigate(['/admin'])
  }
  else{
    alert("error")
  }
}
}
