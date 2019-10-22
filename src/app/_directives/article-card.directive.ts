import {Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';


@Directive({
  selector: '[appArticleCard]'
})
export class ArticleCardDirective {
  @Input() title:string;
  @Input() preview_description:string;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
      
  }
  ngOnInit() {

  }
}
