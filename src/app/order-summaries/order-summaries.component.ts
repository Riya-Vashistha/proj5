import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Route, Router } from '@angular/router';
import { OrderSummariesService } from '../services/summary/order-summaries.service';

@Component({
  selector: 'app-order-summaries',
  templateUrl: './order-summaries.component.html',
  styleUrls: ['./order-summaries.component.css']
})
export class OrderSummariesComponent implements OnInit {

  orderSummaries = null;
  http: any;
  orderDetails: any;
  cid: any;
  
  constructor(private ordersummaries : OrderSummariesService,
    private route:ActivatedRoute, private routed:Router) {}
  
  

    ngOnInit() {
      this.route.queryParams.subscribe(params => {
      console.log(params); 
      this.cid = params["cid"];
       console.log(this.cid);
        }     
        );
      console.log(this.cid + "***********************")
       this.getOrdersSummaries(this.cid);
      
    }


  private getOrdersSummaries(cid: String){
     this.ordersummaries.getOrdersSummaries(cid).subscribe((data: any ) => {
       this.orderSummaries = data
     
   });
  }

 
  clickid(rowid : String){
    console.log("hi" +rowid);
  
    this.routed.navigate(['order-details'],{queryParams: {'oid':rowid}});

    
    
  }  

}


