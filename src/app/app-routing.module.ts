import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { Page01Component } from './page01/page01.component';
import { Page02Component } from './page02/page02.component';
import { PageProfolioDisplayComponent } from './page-profolio-display/page-profolio-display.component';
import { PageArticleDisplayComponent } from './page-article-display/page-article-display.component';
import { PageSearchResultComponent } from './page-search-result/page-search-result.component';
import { PageArchiveComponent } from './page-archive/page-archive.component';

const routes: Routes = [
  {path:'',component:PageHomeComponent},
  {path:'#',component:PageHomeComponent},
  {path:'Nav_Home',component:PageHomeComponent},
  {path:'Nav_Profolio',component:Page01Component},
  {path:'Nav_Article',component:Page02Component},
  {path:'Nav_About',component:PageAboutComponent},
  {path:'Nav_Archive',component:PageArchiveComponent},
  {path:'profolio/:id',component:PageProfolioDisplayComponent},
  {path:'article/:id',component:PageArticleDisplayComponent},
  {path:'search/:type/:keyword',component:PageSearchResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const navRoutingComponents = [
  PageHomeComponent,
  Page01Component,
  Page02Component,
  PageAboutComponent,
  PageProfolioDisplayComponent,
  PageArticleDisplayComponent,
  PageSearchResultComponent,
  PageArchiveComponent];
