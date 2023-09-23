import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  register = {
    name:'',
    lastName: '',
    userName: '',
    email: '',
    password: '',
  }

  onRegister(){
    console.log(this.register);
  }

}
