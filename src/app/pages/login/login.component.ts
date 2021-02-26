import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  userInfoValidator = {email:false, password:false, userName:false};
  userInfo = {email:"", password:"", userName:""};
  variableTemporal = null;

  registrar(){
    if(this.userInfo.email === ""){
      this.userInfoValidator.email = true
    } else {
      this.userInfoValidator.email = false
    }

    if(this.userInfo.userName === ""){
      this.userInfoValidator.userName = true
    } else {
      this.userInfoValidator.userName = false
    }

    if(this.userInfo.password === ""){
      this.userInfoValidator.password = true
    } else {
      this.userInfoValidator.password = false
    }
    console.log("registrar");
    if(this.userInfo.email !== "" && this.userInfo.userName !== "" && this.userInfo.password !== ""){
      localStorage.setItem('userInfo', JSON.stringify(this.userInfo))
      this.router.navigate(['/'])
    }

    this.variableTemporal = localStorage.getItem('userInfo');
    console.log("variableTemporal", this.variableTemporal)
  }


}
