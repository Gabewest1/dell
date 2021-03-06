import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject"

@Injectable()
export class SideBarService {
  private messageSource = new BehaviorSubject<boolean>(false)
  isSideBarShowing = this.messageSource.asObservable()
  data = false

  constructor() { 
    window.addEventListener("resize", () => {
      if (window.innerWidth > 991) {
        this.messageSource.next(false)
        this.data = false
      }
    })
  }

  toggleSideBar() {
    console.log(this.isSideBarShowing, this.data)
    this.data = !this.data
    this.messageSource.next(this.data)
  }
}
