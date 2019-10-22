export class Article{
  title:string;
  created_time: string;
  updated_time: string;
  preview_description: string;
  type:string;
  tag:string[];
  index:number;
  file_name:string;
  constructor(val_title?: string,val_preview_description?:string,val_type?:string,val_tag?:string[],val_file_name?:string){
    this.title = val_title || "";
    this.preview_description = val_preview_description|| "";
    this.type = val_type|| "";
    this.tag = val_tag|| [];
    this.file_name = val_file_name||"";
  }
}
