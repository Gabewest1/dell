import { Component, OnInit } from '@angular/core';
import { Responsive } from "../Responsive" 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends Responsive implements OnInit {

  constructor() { super() }

  ngOnInit() {
  }
}
