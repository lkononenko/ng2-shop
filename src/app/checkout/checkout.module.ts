import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { CheckoutService } from './checkout.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,

    CheckoutRoutingModule,
    SharedModule
  ],
  declarations: [ CheckoutComponent ],
  providers: [ CheckoutService ]
})
export class CheckoutModule { }
