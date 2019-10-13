import { Component, OnInit,ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-page-profolio01',
  templateUrl: './page-profolio01.component.html',
  styleUrls: ['./page-profolio01.component.scss']
})
export class PageProfolio01Component implements OnInit {

  constructor() { }

  path = "assets/profolio/01/";
  images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];

  ngOnInit() {
    for(let i in this.images){
      this.images[i] = this.path +this.images[i];
    }
  }



  // paused = false;
  // unpauseOnArrow = false;
  // pauseOnIndicator = false;
  // pauseOnHover = true;
  //
  // @ViewChild('carousel', {static : true}) carousel: NgbCarousel;
  //
  // togglePaused() {
  //   if (this.paused) {
  //     this.carousel.cycle();
  //   } else {
  //     this.carousel.pause();
  //   }
  //   this.paused = !this.paused;
  // }
  //
  // onSlide(slideEvent: NgbSlideEvent) {
  //   if (this.unpauseOnArrow && slideEvent.paused &&
  //     (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
  //     this.togglePaused();
  //   }
  //   if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
  //     this.togglePaused();
  //   }
  // }
}
