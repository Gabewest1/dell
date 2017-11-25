import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject" 

@Injectable()
export class SideBarService {
  private messageSource = new BehaviorSubject<boolean>(false)
  isSideBarShowing = this.messageSource.asObservable()

  constructor() { }

  toggleSideBar() {
    console.log(this.isSideBarShowing)
    this.messageSource.next(!this.isSideBarShowing.source.value)
  }
}
