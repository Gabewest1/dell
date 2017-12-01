import { Component, OnInit } from '@angular/core';
import { Responsive } from "../Responsive" 
import { SideBarService } from "../../../services/side-bar.service"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends Responsive implements OnInit {
  isMobileSearchBarActive: boolean

  constructor(private sideBar: SideBarService) { super() }

  ngOnInit() {
    this.isMobileSearchBarActive = false
  }

  toggleSideBar() {
    console.log("TOGGLING THE SIDEBAR")
    this.sideBar.toggleSideBar()
  }

  toggleSearchBar() {
    this.isMobileSearchBarActive = !this.isMobileSearchBarActive
  }
}
