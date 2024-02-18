import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessasgeType, ToastrPosition } from './services/ui/custom-toastr.service';
import { NgxSpinnerService } from 'ngx-spinner';
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
constructor(private toastrService: CustomToastrService,private spinner: NgxSpinnerService ) {

  

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
