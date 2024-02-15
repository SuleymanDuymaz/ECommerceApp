import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessageType, Position } from './services/admin/alertify.service';
declare var $:any
//declare var alertify:any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ECommerceAppClient';
  /**
   *
   */
  constructor(private alertify:AlertifyService) {
  
    
  }
  ngOnInit(): void {
    this.alertify.message("Merhaba",{
messageType:MessageType.Success,
delay:3,
position:Position.TopRight

    });
  }
  createMessage(){
    this.alertify.message("Merhaba",{
      messageType:MessageType.Success,
      delay:5,

    });
  }
  dissMissMessage(){
    this.alertify.dismiss()

  }



}
$(document).ready(()=>{
  alert("Angular JS ile yazılan projeye HOŞGELDİN")
  //alertify.alert('Ready!')

})
