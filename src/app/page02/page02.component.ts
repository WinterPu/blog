import { Component, OnInit } from '@angular/core';
import file from '../../assets/cms/article.json';
import { HttpClient } from '@angular/common/http';

import { Router } from "@angular/router";

import {CMSService} from '../_services/cms.service';
import {Article} from '../_models/article';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-page02',
  templateUrl: './page02.component.html',
  styleUrls: ['./page02.component.scss'],
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
export class Page02Component implements OnInit {

  public preview_name = "My Paricle Title";
  public preview_context = "This is my first sample aricle test";
  public preview_created_time = "Last updated 3 mins ago";

  article_list:Article[];
  tag_map:Map<string,Article[]>;

  constructor(private router: Router, private cms:CMSService) { }




  ngOnInit() {
    // Method 1

    console.log("Json data : ",this.cms.getJSONObjectFromFile(file)[0]);

    this.article_list= this.cms.getArticleArray();
    console.log("total article number: " + this.article_list.length);

    this.tag_map= this.cms.getArticleTagMap();
    for (let entry of this.tag_map.entries()) {
        console.log(entry[0], entry[1]);    //"Lokesh" 37 "Raj" 35 "John" 40
    }

    // Method 2
    // this.cms.getJSONObjectFromURLByHttp("assets/cms/profolio.json").subscribe(
    //   (data:any)=>{
    //     this.object = data;
    //     console.log(this.object);
    //   }
    // );
  }



  onClick(id) {
    this.router.navigate(['/article', id]).then(e=>{
      if(e){
        console.log("Navigation is successful.");
      }
      else{
        console.log("Navigation has failed.");
      }
    });
  }

}
