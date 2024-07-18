import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Create_Product } from '../../../contracts/create_product';
import { HttpErrorResponse } from '@angular/common/http';
import { List_Product } from '../../../contracts/list_product';

@Injectable({
  providedIn: 'root'
})
export class  ProductService {

  constructor(private httpClientService:HttpClientService)
   {}


   //foreach hatası.
   create(product: Create_Product,successCalBack?:any,errorCallBack?: (errorMessage: string) => void) {
    product.orders = []; // Örnek olarak boş bir dizi olarak doldurdum, ancak sunucunun istediği formata göre bu alanı doldurmalısınız.
    this.httpClientService.post({
        controller: "Product"
    }, product).subscribe(result=>{
      successCalBack();
    },(errorResponse:HttpErrorResponse)=>{
      const error=errorResponse.error;
      const _error:Array<{key:string,value:Array<string>}>=errorResponse.error;
      let message = "";
      _error.forEach((v,index)=>{
        v.value.forEach((_v, _index) => {
          message += `${_v}<br>`;
        });
      });
      errorCallBack(message);
    });
} 

async read(page: number = 0, size: number = 5, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void): Promise<{ totalProductCount: number; products: List_Product[] }> {
  const promiseData: Promise<{ totalProductCount: number; products: List_Product[] }> = this.httpClientService.get<{ totalProductCount: number; products: List_Product[] }>({
    controller: "Product",
    queryString: `page=${page}&size=${size}`
  }).toPromise();

  promiseData.then(d => successCallBack())
    .catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message))

  return await promiseData;
}





}
