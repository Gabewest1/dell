export class Responsive {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean

  constructor() {
    this.setBreakpoints()

    window.addEventListener("resize", this.setBreakpoints.bind(this))
  }

  setBreakpoints() {
    this.isMobile = window.innerWidth < 768
    this.isTablet = window.innerWidth >= 768 && window.innerWidth < 1200
    this.isDesktop = window.innerWidth >= 1200
  }
}
