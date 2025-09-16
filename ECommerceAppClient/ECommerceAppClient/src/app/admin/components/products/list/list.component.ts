import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { List_Product } from '../../../../contracts/list_product';
import { ProductService } from '../../../../services/common/models/product.service';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';
import { MatPaginator } from '@angular/material/paginator';

declare var $: any;


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent extends BaseComponent implements OnInit,AfterViewInit {

constructor(private productService:ProductService,spinner:NgxSpinnerService,private alertifyService:AlertifyService) {
  super(spinner);
}
displayedColumns: string[] = ['name', 'stock', 'price', 'createdDate','delete','update'];
dataSource: MatTableDataSource<List_Product> = null;

@ViewChild(MatPaginator) paginator: MatPaginator;

async getProducts() {
  this.showSpinner(SpinnerType.BallScaleMultiple);
  const allProducts: { totalCount: number; products: List_Product[] } = await this.productService.read(this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5, () => this.hideSpinner(SpinnerType.BallScaleMultiple), errorMessage => this.alertifyService.message(errorMessage, {

    messageType: MessageType.Error,
    position: Position.TopRight
  }))
  this.dataSource = new MatTableDataSource<List_Product>(allProducts.products);
  this.paginator.length = allProducts.totalCount;
}
async update(id){
  alert(id);
  
}
async delete(id,event){
  const img:HTMLImageElement=event.srcElement;
  $(img.parentElement.parentElement).fadeOut(2000);
  //console.warn(img.parentElement.parentElement);
//  $(img.parentElement.parentElement).fadeOut(200);
  //alert(id);
}
async pageChanged() {
  await this.getProducts();
}
  ngAfterViewInit(): void {
    //debugger;
  
  }




async ngOnInit() {
  await this.getProducts();

}}
