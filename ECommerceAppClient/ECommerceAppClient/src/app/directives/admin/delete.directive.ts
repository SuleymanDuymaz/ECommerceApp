import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { HttpClientService } from '../../services/common/http-client.service';
import { ProductService } from '../../services/common/models/product.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent, DeleteState } from '../../dialogs/delete-dialog/delete-dialog.component';


declare var $: any;

@Directive({
  selector: '[deleteDirective]'
}) 
export class DeleteDirective {

  constructor(
    private element:ElementRef,
    private _renderer:Renderer2,
    private _productService:ProductService,
    public dialog : MatDialog

  ) 
  { 
    const img=_renderer.createElement("img");
    img.setAttribute("src","../../../../assets/delete.png");
    img.setAttribute("style", "cursor:pointer;");
    img.widht=25;
    img.height=25;
    _renderer.appendChild(element.nativeElement,img);
  }
@Input()  id:string;
/*html alanıyla aynı adda olmalı */ 
@Output()callback:EventEmitter<any>=new EventEmitter();




@HostListener("click")
 @HostListener("click")
async onclick() {
  this.openDialog(async () => {
    const td: HTMLTableCellElement = this.element.nativeElement;
    await this._productService.delete(this.id);

    $(td.parentElement).fadeOut(2000, () => {
      this.callback.emit();
    });
  });
}


  openDialog(dafterClosed:any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: DeleteState.Yes
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result==DeleteState.Yes){
        dafterClosed();
      }
    });
  }

  

}
