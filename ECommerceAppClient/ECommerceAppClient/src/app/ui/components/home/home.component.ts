import { Component, OnInit } from '@angular/core';

import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent extends BaseComponent implements OnInit {
  /*
  constructor(private spinner :NgxSpinnerService) {
   //super(spinner)
   this.spinner.show("allPage")
   setTimeout(() => {
    
    this.spinner.hide("allPage");
  }, 5000);
  }*/
  /**
   *
   */
  constructor(spinner: NgxSpinnerService) {
super(spinner)
  
  }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallScaleMultiple)
  }
  message(){
    //this.showSpinner(SpinnerType.BallScaleMultiple)
  }

}
