import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../../services/common/http-client.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { CustomToastrService, ToastrMessasgeType, ToastrPosition } from '../../../services/ui/custom-toastr.service';
import { BaseComponent, SpinnerType } from '../../../base/base.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent extends BaseComponent implements OnInit {
  title = 'ECommerceApp Product';



  constructor(private toastrService: CustomToastrService, spinner: NgxSpinnerService,private httpClientService :HttpClientService) {
    super(spinner);
    
  }
  ngOnInit(): void {
   // throw new Error('Method not implemented.'),
    this.showSpinner(SpinnerType.BallScaleMultiple)
 
    this.httpClientService.get({
      controller:"Product"
    }).subscribe(data=>console.log(data))
 

   /*
    this.httpClientService.post({
      controller:"product"
    },
    {
      name:"Kalem",
      stock:100,
      price:10,

    }).subscribe();

    this.httpClientService.post({
      controller:"product"
    },
    {
      name:"Kitap",
      stock:50,
      price:5,

    }).subscribe();
   */

  }
  message(){
  
    this.toastrService.message("Toastr Service çalışıyor","Başarılı",{messageType:ToastrMessasgeType.Success,position:ToastrPosition.BottomFullWidht});
  
  }
}
