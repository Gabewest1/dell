export class Responsive {
  isMobile: boolean

  constructor() {
    this.isMobile = window.innerWidth < 768

    window.addEventListener("resize", () => {
      this.isMobile = window.innerWidth < 768
    })
  }
}
