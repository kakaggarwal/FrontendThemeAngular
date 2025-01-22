import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { NewsletterSignup } from '../../models/common.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent implements OnInit {
  carouselOptions = {
    activeCarousel: 0,
    slideDuration: 3000,
    totalSlides: 3,
  };

  newsletterSignup: NewsletterSignup = new NewsletterSignup();

  constructor() { }

  ngOnInit() {
    this.configCarousel();
  }

  onSubmitNewsletterSignup() {
    // TO DO: display some notification notifying user that they have been added to subscription list
  }

  // carousel functions
  onClickSlideTo(carouselId: number | string): void {
    if (typeof carouselId === 'number') {
      this.carouselOptions.activeCarousel = carouselId;
    }
    else if (typeof carouselId === 'string') {
      if (carouselId === 'next') {

        if (this.carouselOptions.activeCarousel >= this.carouselOptions.totalSlides - 1) {
          this.carouselOptions.activeCarousel = 0;
        }
        else {
          this.carouselOptions.activeCarousel = this.carouselOptions.activeCarousel + 1;
        }
      }
      else if (carouselId === 'prev') {

        if (this.carouselOptions.activeCarousel <= 0) {
          this.carouselOptions.activeCarousel = this.carouselOptions.totalSlides - 1;
        }
        else {
          this.carouselOptions.activeCarousel = this.carouselOptions.activeCarousel - 1;
        }
      }
    }
  }

  configCarousel(): void {
    setInterval(() => {
      this.onClickSlideTo('next');
    }, this.carouselOptions.slideDuration);
  }

}
