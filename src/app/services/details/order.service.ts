import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';

export class order {
  constructor(public id: String){}
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }



  getOrderDetails(oid:String){
    return this.http.get<any[]>("http://localhost:8080/orders/"+`${oid}`);
  } 



}
