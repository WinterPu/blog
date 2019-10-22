import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-profolio03',
  templateUrl: './page-profolio03.component.html',
  styleUrls: ['./page-profolio03.component.scss']
})
export class PageProfolio03Component implements OnInit {

  constructor() { }

  path = "assets/profolio/03/";
  images = ["01.png", "02.png", "03.png","04.png", "05.png", "06.png", "07.png"];
  ngOnInit() {
    for(let i in this.images){
      this.images[i] = this.path +this.images[i];
    }
  }

}
