import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-profolio02',
  templateUrl: './page-profolio02.component.html',
  styleUrls: ['./page-profolio02.component.scss']
})
export class PageProfolio02Component implements OnInit {

  constructor() { }

  path = "assets/profolio/02/";
  images = ["01.jpg", "02.jpg", "03.jpg"];
  ngOnInit() {
    for(let i in this.images){
      this.images[i] = this.path +this.images[i];
    }
  }

}
