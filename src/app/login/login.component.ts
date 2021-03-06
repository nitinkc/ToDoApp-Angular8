import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Hardcoded values 
  username = 'username'
  password = ''
  errorMessage = "Invalid Credentials!!"
  invalidLogin = false;

  constructor(private router: Router, private hardcodedAuthentication: HardcodedAuthenticationService)
    { }

  ngOnInit() {
  }

  handleLogin(){
    //if (this.username === 'username' && this.password == ''){
      if(this.hardcodedAuthentication.authenticate(this.username,this.password)){
      this.router.navigate(['welcome',this.username]);
      this.invalidLogin = false;
      console.log("Welcome to the Login Page");
    }else{
      this.invalidLogin = true;
      console.log("Incorrect credentials");
    }
  }
}
