import { Component, OnInit } from '@angular/core';
import { Responsive } from "../Responsive" 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent extends Responsive implements OnInit {
  activeListItem: number
  activeSublistItem: number

  constructor() { super() }

  ngOnInit() {
    this.activeListItem = -1
    this.activeSublistItem = -1
  }

  getIconStyles(list, sublist) {
    let styles = { fa: true }

    if (!sublist) {
      getListItemIcon.call(this)
    } else {
      getSublistItemIcon.call(this)
    }

    function getListItemIcon() {
      if (list === this.activeListItem) {
        styles["fa-caret-up"] = true
      } else {
        styles["fa-caret-down"] = true
      }
    }

    function getSublistItemIcon() {
      if (list === this.activeListItem && sublist === this.activeSublistItem) {
        styles["fa-caret-up"] = true
      } else {
        styles["fa-caret-down"] = true
      }
    }

    return styles
  }

  setActiveListItem(listItem) {
    let clickedAlreadyActiveListItem = listItem === this.activeListItem

    if (clickedAlreadyActiveListItem) {
      this.activeListItem = -1
    } else {
      this.activeListItem = listItem
    }
  }

  setActiveSublistItem(event, listItem) {
    event.stopPropagation()

    let clickedAlreadyActiveListItem = listItem === this.activeSublistItem
    
    if (clickedAlreadyActiveListItem) {
      this.activeSublistItem = -1
    } else {
      this.activeSublistItem = listItem
    }
  }
}
