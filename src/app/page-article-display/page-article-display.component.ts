import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CMSService} from '../_services/cms.service';

@Component({
  selector: 'app-page-article-display',
  templateUrl: './page-article-display.component.html',
  styleUrls: ['./page-article-display.component.scss']
})
export class PageArticleDisplayComponent implements OnInit {

  id: number;
  path:string;
  private sub: any;

  constructor(private route: ActivatedRoute,private cms:CMSService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
         this.id = +params['id']; // (+) converts string 'id' to a number
    ​     console.log(this.id);
          this.path = this.cms.getArticlePathByIndex(this.id,this.cms.getArticleArray());
          console.log("Get Path:"+this.path);
       // In a real app: dispatch action to load the details here.
    });
  }

  ngOnDestroy() {
  this.sub.unsubscribe();
  }
}
