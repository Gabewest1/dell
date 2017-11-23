import { Component, OnInit } from '@angular/core';
import { BreakpointsService } from "../../../services/breakpoints.service"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMobile: boolean

  constructor(public breakpoints: BreakpointsService) { }

  ngOnInit() {
    console.log("BREAKPOINTS:", this.breakpoints)
    this.isMobile = this.breakpoints.isMobile
  }
}
