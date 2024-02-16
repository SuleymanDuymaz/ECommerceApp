import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  /**
   *
   */
  constructor(private spinner: NgxSpinnerService ) {
    this.spinner.show()
    
  }

}
