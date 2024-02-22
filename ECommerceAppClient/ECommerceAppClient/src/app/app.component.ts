import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessasgeType, ToastrPosition } from './services/ui/custom-toastr.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from './services/common/http-client.service';
declare var $:any
//declare var alertify:any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'ECommerceAppClient';
  /**
   *
   */
/**
 *
 */
constructor(private toastrService: CustomToastrService,private spinner: NgxSpinnerService,private httpClientService :HttpClientService ) {
this.httpClientService.get({
  controller:"products"
}).subscribe(data=>console.log(data));
  
this.httpClientService.get({
baseUrl:"https://jsonplaceholder.typicode.com",
controller:"posts"

}).subscribe(data=>console.log(data));
  

}
  
message(){
  
  this.toastrService.message("Toastr Service çalışıyor","Başarılı",{messageType:ToastrMessasgeType.Success,position:ToastrPosition.BottomFullWidht});

}


}
/*
$(document).ready(()=>{
  alert("Angular JS ile yazılan projeye HOŞGELDİN")
  //alertify.alert('Ready!')

})*/
