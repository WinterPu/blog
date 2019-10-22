import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import {CMSService} from '../_services/cms.service';
import {Profolio} from '../_models/profolio';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-page01',
  templateUrl: './page01.component.html',
  styleUrls: ['./page01.component.scss'],
  animations: [
   trigger('SlideInOut', [

     // Fade In && Slide Up
     transition('void => *', [
       style({transform: 'translateY(10%)', opacity: 0 }),
       animate(800, style({transform: 'translateY(0)',opacity: 1}))
     ])
   ])
 ]
})


export class Page01Component implements OnInit {

  public preview_image_path = "assets/profolio/01/GameCover.jpg";
  public preview_name = "My Card Title";
  public preview_context = "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.";
  public preview_created_time = "Last updated 3 mins ago";

  profolios:Profolio[];
  profolio_image_path_list:string[];
  constructor(private router: Router,private cms:CMSService) { }

  ngOnInit() {
    this.profolio_image_path_list = [];
    this.profolios = this.cms.getProfolioArray();
    console.log("Total profolio number: "+ this.profolios.length);
    this.profolios.forEach((profolio:Profolio)=>{
        this.profolio_image_path_list.push(this.cms.getProfolioCoverImagePathByIndex(profolio.index,this.profolios));
    });
  }

  onClick(id) {
    this.router.navigate(['/profolio', id]).then(e=>{
      if(e){
        console.log("Navigation is successful.");
      }
      else{
        console.log("Navigation has failed.");
      }
    });
  }



}
