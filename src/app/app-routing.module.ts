import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { Page01Component } from './page01/page01.component';
import { Page02Component } from './page02/page02.component';

const routes: Routes = [
  {path:'',component:PageHomeComponent},
  {path:'#',component:PageHomeComponent},
  {path:'Nav_Home',component:PageHomeComponent},
  {path:'Nav_Profolio',component:Page01Component},
  {path:'Nav_Article',component:Page02Component},
  {path:'Nav_About',component:PageAboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const navRoutingComponents = [PageHomeComponent,Page01Component,Page02Component,PageAboutComponent];
