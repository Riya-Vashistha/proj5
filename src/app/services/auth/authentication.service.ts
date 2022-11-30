import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export class Userdetails{
  constructor(
    userId:string,
    password:string
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 

  token:String=''

  constructor(private http:HttpClient,private route:Router) { }

  authenticate(name:String,pass:String){
    console.log(name)
    return this.http.post("http://localhost:9095/auth-api/login",{userid:name,upassword:pass})
  } 
  
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    //console.log(!(user === null))
    return !(user === null)
  }

  logOut() {

    sessionStorage.removeItem('username')
    sessionStorage.removeItem('token')
    this.route.navigate(['/login'])
  }
  

}

