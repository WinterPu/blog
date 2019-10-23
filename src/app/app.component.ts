import { Component,OnInit } from '@angular/core';
import {CMSService} from './_services/cms.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'blog';

  constructor(private cms:CMSService) { }
  ngOnInit(){
    this.cms.initCMS();
  }
  
}
