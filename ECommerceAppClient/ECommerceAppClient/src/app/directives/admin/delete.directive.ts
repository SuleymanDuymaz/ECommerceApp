import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { HttpClientService } from '../../services/common/http-client.service';
import { ProductService } from '../../services/common/models/product.service';


declare var $: any;

@Directive({
  selector: '[deleteDirective]'
})
export class DeleteDirective {

  constructor(
    private element:ElementRef,
    private _renderer:Renderer2,
    private _productService:ProductService

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
  async onclick(){
    //console.warn(this.element)
    const td:HTMLTableCellElement=this.element.nativeElement;
    await this._productService.delete(this.id);

    $(td.parentElement).fadeOut(2000,()=>{
    this.callback.emit();
    });
   /* const img:HTMLImageElement=event.srcElement;
    $(img.parentElement.parentElement).fadeOut(2000);*/
  }

  

}
