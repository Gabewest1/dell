import { Component, OnInit } from '@angular/core';
import { Responsive } from "./components/shared/Responsive" 
import { SideBarService } from "./services/side-bar.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends Responsive {
  title = 'app';
  isSideBarShowing: boolean

  constructor(private sideBar: SideBarService) { super() }

  ngOnInit() {
    console.log("IN the App Component")
    this.sideBar.isSideBarShowing.subscribe(isSideBarShowing => {
      console.log("AppComponent: ", isSideBarShowing)
      this.isSideBarShowing = isSideBarShowing
    })
  }


}
