import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class summaries {
  constructor(public id: String){}
}

@Injectable({
  providedIn: 'root'
})
export class OrderSummariesService {

  constructor(private http:HttpClient) { }

  // getOrdersSummaries(userName: any){
  //   return this.http.get("http://localhost:8080/orders?customerId="+userName);
  // } 

    getOrdersSummaries(cid:String){
      return this.http.get("http://localhost:8080/orders?customerId="+`${cid}`);
    } 

  // clickid(){
    
   
  // }

}
