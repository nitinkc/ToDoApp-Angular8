import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

  handleLogin(){
    if (this.username === 'username' && this.password == ''){
      this.invalidLogin = true;
    }
  }
}
