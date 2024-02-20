
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';


export class BaseComponent {
/**
 *
 */
/**
 *
 */
constructor(private spinner:NgxSpinnerService) {

  
}
showSpinner(spinerNameType:SpinnerType){
this.spinner.show(spinerNameType)
setTimeout(() => {
  /** spinner ends after 5 seconds */
  this.spinner.hide(spinerNameType);
}, 2000);
}
hideSpinner(spinerNameType:SpinnerType){
this.spinner.hide(spinerNameType)
}
}
export enum SpinnerType{
  BallScaleMultiple="allPage"
}
