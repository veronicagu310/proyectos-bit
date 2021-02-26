import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  name = 'Verónica';
  iconDetails: object[];
  constructor() { }

  ngOnInit(): void {
    this.iconDetails = [
      {label: 'logout', source: 'assets/icons/salir.svg'},
      {label: 'login', source: 'assets/icons/user.png'}
    ]
  }

  alert(value){
    console.log(value);
  }
}
