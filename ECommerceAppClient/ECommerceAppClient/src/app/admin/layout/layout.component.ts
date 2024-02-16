import { Component, OnInit } from '@angular/core';
import { AlertifyService,MessageType  } from '../../services/admin/alertify.service';
import { Position } from '../../services/admin/alertify.service';

declare var $:any

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
  title = 'ECommerceAppClient';

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