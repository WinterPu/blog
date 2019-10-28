export class Profolio{
  title:string;
  created_time: string;
  updated_time: string;
  preview_description: string;
  preview_image_file_name:string;
  index:number;
  order:number;
  constructor(val_title?: string,val_preview_description?:string,val_preview_image_file_name?:string){
    this.title = val_title || "";
    this.preview_description = val_preview_description|| "";
    this.preview_image_file_name = val_preview_image_file_name || "";
  }
}
