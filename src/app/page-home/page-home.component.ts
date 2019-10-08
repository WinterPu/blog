import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';



@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],

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
export class PageHomeComponent implements OnInit {

  public preview_image_path = "assets/blog/images/01.png";
  public preview_name = "My Card Title";
  public preview_context = "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.";
  public preview_created_time = "Last updated 3 mins ago";
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick() {
    console.log("OK");
    this.router.navigateByUrl('/Nav_Profolio').then(e=>{
      if(e){
        console.log("Navigation is successful.");
      }
      else{
        console.log("Navigation has failed.");
      }
    });
  }
}
