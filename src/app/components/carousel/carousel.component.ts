import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  activeSlide: number
  numSlides: number
  slideOut: number
  autoTransition: number

  constructor() { }

  ngOnInit() {
    this.activeSlide = 0
    this.numSlides = 4
    this.slideOut = -1

    this.startAutoSlideTransition()
  }

  startAutoSlideTransition() {
    this.autoTransition = setInterval(() => this.increaseSlide(), 2000)    
  }

  stopAutoSlideTransition() {
    clearInterval(this.autoTransition)    
  }

  increaseSlide() {
    this.slideOut = this.activeSlide
    this.activeSlide = (this.activeSlide + 1) % this.numSlides
  }

  decreaseSlide() {
    this.slideOut = this.activeSlide    
    const nextSlide = this.activeSlide - 1
    const isLessThanZero = nextSlide <= -1

    this.activeSlide = isLessThanZero ? this.numSlides : nextSlide 
  }

  setSlide(slide) {
    this.stopAutoSlideTransition()

    if (this.activeSlide === slide) {
      this.slideOut = -1
    }
    if (this.activeSlide !== slide) {
      this.slideOut = this.activeSlide    
      this.activeSlide = slide
    }

    this.startAutoSlideTransition()
  }
}
