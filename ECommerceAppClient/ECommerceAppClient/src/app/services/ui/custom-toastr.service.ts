import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastr: ToastrService) {
  
  
  }
  message(message:string,title:string, tastrOptions:Partial<ToastrOptions>){
   this.toastr[tastrOptions.messageType](message,title,{positionClass:tastrOptions.position})

  }
}
export enum ToastrMessasgeType{
  Success="success",
  Info="info",
  Warning="warning",
  Error="error  ",
}
export enum ToastrPosition{
  TopRight="toast-top-right",
  BottomRight="toast-bottom-right",
  BottomLeft="toast-bottom-left",
  TopLeft="toast-top-left",
  TopFullWidht="toast-top-full-widht",
  BottomFullWidht="toast-bottom-full-widht",
  TopCenter="toast-top-center",
  BottomCenter="toast-bottom-center",
}
export class ToastrOptions{
  messageType:ToastrMessasgeType
  position:ToastrPosition;
  
}
