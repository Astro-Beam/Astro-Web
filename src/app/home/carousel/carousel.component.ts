import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})

export class CarouselComponent {

  items = 3
  currentSlide = 0;
  intervalId: any;

  ngOnInit(): void {
    // this.startCarousel();
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000); // Adjust the time interval (3 seconds here)
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.items
  }

  stopCarousel(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Clean up the interval when the component is destroyed
    }
  }

}
