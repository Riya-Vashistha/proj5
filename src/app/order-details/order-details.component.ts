
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { OrderService } from "../services/details/order.service";


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  
   details: any
   desc: any
   oid: any;
  
  constructor(private orderservice : OrderService,
    private route:ActivatedRoute) {}
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
    console.log(params); 
    this.oid = params["oid"];
     console.log(this.oid);
      }     
      );
    console.log(this.oid + "***********************")
     this.getOrderDetails(this.oid);
  }

  private getOrderDetails(oid: String){
    this.orderservice.getOrderDetails(oid).subscribe((data: any ) => {
      this.desc = data
      this.details = data.items;
    
  });
  
}

}
  
