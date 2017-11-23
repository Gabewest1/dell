import { Component, OnInit } from '@angular/core';
import { Responsive } from "../Responsive" 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent extends Responsive implements OnInit {
  constructor() { super() }

  ngOnInit() {
    console.log("isMobile:", this.isMobile)
  }

}
