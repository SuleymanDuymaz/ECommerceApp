import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ProductService } from '../../../../services/common/models/product.service';
import { Create_Product } from '../../../../contracts/create_product';
import { BaseComponent } from '../../../../base/base.component';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent extends BaseComponent implements OnInit {
/**
 *
 */
constructor(spinner:NgxSpinnerService, private productService:ProductService) {
 super(spinner);

  
}
create(name:HTMLInputElement,stock:HTMLInputElement,price:HTMLInputElement){
  const create_product:Create_Product=new Create_Product();
  create_product.name=name.value;
  create_product.price=parseFloat(price.value);
  create_product.stock=parseInt(stock.value);
  this.productService.create(create_product);

}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
