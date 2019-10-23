import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  static type_ByTag:string = "Tag";
  static type_ByKeyword:string = "Keyword";
  constructor() { }

  getSearchTypeByTag(){return SearchService.type_ByTag;}
  getSearchTypeByKeyword(){return SearchService.type_ByKeyword;}
}
