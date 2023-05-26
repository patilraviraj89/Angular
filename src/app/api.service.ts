import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
baseurl="https://6423f2a247401740432f3f28.mockapi.io/api/v1/"
  constructor(private http:HttpClient) { }
  get(path:string){
    return this.http.get(this.baseurl + path);
}

post(path:string,data:any){
return this.http.post(this.baseurl + path,data);
}

delete(path:string){
 return this.http.delete(this.baseurl + path);
}

put(path:string,data:any){
return this.http.put(this.baseurl + path,data);
}
}
