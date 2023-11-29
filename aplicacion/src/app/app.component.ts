import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  nombreUsuario = 'Juancho';
}

export interface nameUser {
  nombreUsuario: string;
}
