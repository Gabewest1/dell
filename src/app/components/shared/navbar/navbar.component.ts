import { Component, OnInit } from '@angular/core';
import { Responsive } from "../Responsive" 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent extends Responsive implements OnInit {
  activeListItem: number

  constructor() { super() }

  ngOnInit() {
    this.activeListItem = -1
  }

  setActiveListItem(listItem) {
    let clickedAlreadyActiveListItem = listItem === this.activeListItem

    if (clickedAlreadyActiveListItem) {
      this.activeListItem = -1
    } else {
      this.activeListItem = listItem
    }
  }
}
