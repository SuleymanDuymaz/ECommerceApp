import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { List_Product } from '../../../../contracts/list_product';
import { ProductService } from '../../../../services/common/models/product.service';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent extends BaseComponent implements OnInit,AfterViewInit {

constructor(private productService:ProductService,spinner:NgxSpinnerService,private alertifyService:AlertifyService) {
  super(spinner);
}

async getProducts(){
    //this.productService.read(());
    this.showSpinner(SpinnerType.BallScaleMultiple);

    const allProducts:List_Product[]=await this.productService.read(this.paginator?this.paginator.pageIndex:0,this.paginator?this.paginator.pageSize:5,()=>this.hideSpinner(SpinnerType.BallScaleMultiple),errorMessage=>this.alertifyService.message(errorMessage,{
  
    messageType:MessageType.Error,
    position:Position.TopRight
  }))
  //debugger;
  this.dataSource=new MatTableDataSource<List_Product>(allProducts);
  this.dataSource.paginator=this.paginator;
}
  ngAfterViewInit(): void {
    //debugger;
  
  }
displayedColumns: string[] = ['name','stock', 'price'];
dataSource :  MatTableDataSource<List_Product>=null;
@ViewChild(MatPaginator) paginator: MatPaginator;

async ngOnInit() {
  await this.getProducts();

}}
