import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


isAuthenticated : boolean =false ;

roles : any ;

userName : any ;
accessToken! : string ;

  constructor(private http : HttpClient) { }

  public  login(userName :string, password : string){


    console.log("###userName :"+userName+"  password  :"+password);
    let options={

      headers : new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded")
    }

    let params=new HttpParams().set("userName",userName).set("password" ,password);

  return   this.http.post("http://localhost:8085/auth/login" , params , options);

  }


  loadProfile(resultat: any) {

    let jwToken=resultat['access-token'];
     this.accessToken=jwToken;
   let decodeJwt : any= jwtDecode(this.accessToken);
   this.userName=decodeJwt.sub;
   this.roles=decodeJwt.scope ;
  }
}
