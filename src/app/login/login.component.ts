import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    formLoginGroup : FormGroup | undefined;
    resultat : any ;

  constructor(private fb: FormBuilder ,
              private authService : AuthService,
            private router : Router) { }

  ngOnInit(): void {

    this.formLoginGroup=this.fb.group({
      userName:this.fb.control(null),
      password:this.fb.control(null)
    })
  }

  handleLogin(){
console.log("test___handleLogin");
    let userName = this.formLoginGroup?.value.userName ;
    let password =this.formLoginGroup?.value.password ;

    this.authService.login(userName,password).subscribe({
      next : data=>{
console.log(data)
      },error: err => {
        console.log(("Exception with authentfication :"+err)) ;
      }
    });

  }
}
