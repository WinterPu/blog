import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CMSService} from '../_services/cms.service';
import {SearchService} from '../_services/search.service';
import { Router } from "@angular/router";
import {Article} from '../_models/article';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-page-search-result',
  templateUrl: './page-search-result.component.html',
  styleUrls: ['./page-search-result.component.scss'],
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
export class PageSearchResultComponent implements OnInit {

  private sub: any;
  page_title:string;
  type:string;
  keyword: string;

  tags_article_list:Map<string,Article[]>;

  results:Article[];

  path:string;

  tags:string[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cms:CMSService,
    private searchService:SearchService ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
         this.type = params['type']; // (+) converts string 'id' to a number
         this.keyword = params['keyword'];​ // this keyword includes:  search by tag + search by content keyword

         console.log(this.type);
         console.log(this.keyword);

         this.tags_article_list = this.cms.getArticleTagMap();
         if(this.type === this.searchService.getSearchTypeByTag()){
              this.results = this.tags_article_list.get(this.keyword);
              this.page_title = "Tag: " + this.keyword;
         }
         else if (this.type ===  this.searchService.getSearchTypeByKeyword()){
           // TO BE DONE!
              this.page_title = "Keyword: " + this.keyword;
         }

         console.log("Find Total: "+ this.results.length);

       // In a real app: dispatch action to load the details here.
    });
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
