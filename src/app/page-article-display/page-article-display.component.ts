import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CMSService} from '../_services/cms.service';
import {SearchService} from '../_services/search.service';
import { Router } from "@angular/router";
import {Article} from '../_models/article';
@Component({
  selector: 'app-page-article-display',
  templateUrl: './page-article-display.component.html',
  styleUrls: ['./page-article-display.component.scss']
})
export class PageArticleDisplayComponent implements OnInit {

  id: number;
  path:string;
  private sub: any;
  tags:string[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cms:CMSService,
    private searchService:SearchService ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
         this.id = +params['id']; // (+) converts string 'id' to a number
    ​     console.log(this.id);
          this.path = this.cms.getArticlePathByIndex(this.id);
          this.tags = this.cms.getArticleTagByIndex(this.id);
          console.log("Get Path:"+this.path);
       // In a real app: dispatch action to load the details here.
    });
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



  ngOnDestroy() {
  this.sub.unsubscribe();
  }



}
