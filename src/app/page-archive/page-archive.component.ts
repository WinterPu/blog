import { Component, OnInit } from '@angular/core';
import {CMSService} from '../_services/cms.service';
import {Article} from '../_models/article';
import { Router } from "@angular/router";
import {SearchService} from '../_services/search.service';

@Component({
  selector: 'app-page-archive',
  templateUrl: './page-archive.component.html',
  styleUrls: ['./page-archive.component.scss']
})
export class PageArchiveComponent implements OnInit {

  tag_map:Map<string,Article[]>;

  constructor(
    private router: Router,
    private cms:CMSService,
    private searchService:SearchService) { }

  ngOnInit() {
    this.tag_map= this.cms.getArticleTagMap();
    // for (let entry of this.tag_map.entries()) {
    //     console.log(entry[0], entry[1]);    //"Lokesh" 37 "Raj" 35 "John" 40
    // }
  }

  onClickSearchByTag(tag_name:string) {
    this.router.navigate(['/search',this.searchService.getSearchTypeByTag(), tag_name]).then(e=>{
      if(e){
        console.log("Navigation is successful.");
      }
      else{
        console.log("Navigation has failed.");
      }
    });
  }

}
