import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  btnDisable = true;

  register = {
    user: '',
    password: ''
  }

  onRegister(){
    console.log(this.register);
  }

}
