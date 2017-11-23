import { Injectable } from '@angular/core';

@Injectable()
export class BreakpointsService {
  isMobile: boolean

  constructor() {
    this.isMobile = window.innerWidth < 768

    window.addEventListener("resize", () => {
      this.isMobile = window.innerWidth < 768
    })
  }
}
