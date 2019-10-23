import { Injectable,OnInit} from '@angular/core';
import article_json_file from '../../assets/cms/article.json';
import profolio_json_file from '../../assets/cms/profolio.json';
import { HttpClient } from '@angular/common/http';
import {Article} from '../_models/article';
import {Profolio} from '../_models/profolio';

@Injectable({
  providedIn: 'root'
})
export class CMSService {
  private path_article:string = "assets/blog/";
  private path_profolio:string = "assets/profolio/";

  constructor(private httpClient: HttpClient) { }


  // Get Data From Json File
  // method 1
  getJSONObjectFromFile(file:any){
    return JSON.parse(JSON.stringify(file));
  }

  // method 2
  getJSONObjectFromURLByHttp(url:string) {
      return this.httpClient.get(url);
  }


  // Article
  getArticleArray(){
    let articles:Article[] = [];
    let json_data= this.getJSONObjectFromFile(article_json_file);

    for(var i:number =0; i<json_data.length;i++){
      let article = new Article();
      article.title = json_data[i]["title"];
      article.type = json_data[i]["type"];
      article.tag = json_data[i]["tag"];
      article.preview_description = json_data[i]["preview_description"];
      article.file_name = json_data[i]["file_name"];
      article.index = i;
      articles.push(article);
    }

    return articles;
  }


  getArticleTagMap(){
    let tags = new Map<string,Article[]>();
    let articles:Article[] = this.getArticleArray();
    // for each article, get its tag list
    articles.forEach((article:Article)=>{
      let tag_this_article = article.tag;
      // for each tag, push to tag map
      tag_this_article.forEach( (tag:string)=>{
          let tmp_article_array = tags.get(tag);
          if(tmp_article_array === undefined){
            console.log("tag test");
            tmp_article_array=[];
          }
          tmp_article_array.push(article);
          tags.set(tag,tmp_article_array);
      }
      );
    });
    return tags;
  }

  getArticlePathByIndex(id:number,articles:Article[]){
    if(id >= articles.length){
      console.log("Wrong ID!");
      return null;
    }
    else
      return this.path_article+articles[id].file_name;
  }



  // Profolio

  getProfolioArray(){
    let profolios:Profolio[] = [];
    let json_data= this.getJSONObjectFromFile(profolio_json_file);

    for(var i:number =0; i<json_data.length;i++){
      let profolio = new Profolio();
      profolio.title = json_data[i]["title"];
      profolio.preview_description = json_data[i]["preview_description"];
      profolio.preview_image_file_name = json_data[i]["preview_image_file_name"];
      profolio.index = i;
      profolios.push(profolio);
    }
    return profolios;
  }


  getProfolioCoverImagePathByIndex(id:number,profolios:Profolio[]){
    if(id >= profolios.length){
      console.log("Wrong ID!");
      return null;
    }
    else{
      let index = profolios[id].index+1;
      let img_name = profolios[id].preview_image_file_name;
      return this.path_profolio +(index<10?"0"+index:index)+"/"+img_name;
    }
  }


}
