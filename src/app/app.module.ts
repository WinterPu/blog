import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, navRoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { MarkdownModule } from 'ngx-markdown';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageProfolio01Component } from './page-profolio01/page-profolio01.component';
import { PageProfolio02Component } from './page-profolio02/page-profolio02.component';
import { PageProfolio03Component } from './page-profolio03/page-profolio03.component';
import { PageProfolio04Component } from './page-profolio04/page-profolio04.component';
import { PageProfolio05Component } from './page-profolio05/page-profolio05.component';
import { PageArticleDisplayComponent } from './page-article-display/page-article-display.component';
import { ArticleCardDirective } from './_directives/article-card.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    navRoutingComponents,
    FooterComponent,
    PageProfolio01Component,
    PageProfolio02Component,
    PageProfolio03Component,
    PageProfolio04Component,
    PageProfolio05Component,
    PageArticleDisplayComponent,
    ArticleCardDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
