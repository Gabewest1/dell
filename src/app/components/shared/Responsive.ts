export class Responsive {
  isMobile: boolean

  constructor() {
    this.isMobile = window.innerWidth < 768

    window.addEventListener("resize", () => {
      console.log("resize:", this)
      this.isMobile = window.innerWidth < 768
    })
  }
}
