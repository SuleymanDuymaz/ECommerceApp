import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from '../../../base/base.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent extends BaseComponent implements OnInit {
  constructor(spinner : NgxSpinnerService) {
   super(spinner)
  }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallScaleMultiple)
  }
  message(){
    this.showSpinner(SpinnerType.BallScaleMultiple)
  }

}
