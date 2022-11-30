
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/auth/authentication.service';
export class JwtRequest{
  constructor(user:String,password:String){}
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  custname:string=''
  custpass:string=''
  errorMsg:string='';
  authError: boolean=false;
  constructor(private authService:AuthenticationService,private route:Router) { }

  ngOnInit(): void {
  }
  
  login(){
    console.log(this.custname)
    this.authService.authenticate(this.custname,this.custpass).subscribe((userData: any)=>this.handleResponse(userData,this.custname),
      (error: any)=>this.handleError(error))
      console.log(this.custname+ "**************************")

  }
  handleError(error: any) {
    this.errorMsg=error.error.message
    this.authError=true
    this.custname=''
    this.custpass=''
    console.log(error.error)
  }

  handleResponse(response:any,name:any){
    console.log(response.authToken);
    sessionStorage.setItem('username',response.userId)
    let tokenStr= 'Bearer '+response.authToken
    console.log(tokenStr)
    console.log(response.userid)
    sessionStorage.setItem('token', tokenStr)
    console.log(response.userid+"hiii")
    console.log(name+"hello name")
    this.route.navigate(["order-summaries"],{queryParams: {'cid':response.userid}});
  }

  closeErrorBox(){
    this.authError=false
  }
}