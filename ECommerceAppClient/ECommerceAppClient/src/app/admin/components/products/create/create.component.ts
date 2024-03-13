import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ProductService } from '../../../../services/common/models/product.service';
import { Create_Product } from '../../../../contracts/create_product';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent extends BaseComponent {
/**
 *
 */
constructor(spinner:NgxSpinnerService, private productService:ProductService,private alertify:AlertifyService) {
 super(spinner);

  
}

create(name:HTMLInputElement,stock:HTMLInputElement,price:HTMLInputElement){
  this.showSpinner(SpinnerType.BallScaleMultiple);
  const create_product:Create_Product=new Create_Product();
  create_product.name=name.value;
  create_product.price=parseFloat(price.value);
  create_product.stock=parseInt(stock.value);
  this.productService.create(create_product,()=>{
    this.hideSpinner(SpinnerType.BallScaleMultiple);
    this.alertify.message("Ürün  başarıyla eklenmiştir",{
      messageType:MessageType.Success,
      position:Position.TopRight,
    });
  },errorMessage =>{
    this.alertify.message(errorMessage,{
      messageType: MessageType.Error,
      position: Position.TopRight
    });
  });

}

 
}
