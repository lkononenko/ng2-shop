import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckoutComponent } from './checkout.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const checkoutRoutes: Routes = [
  { path: 'checkout/:type/:slug', component: CheckoutComponent },
  { path: 'checkout/confirmation', component: ConfirmationComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(checkoutRoutes) ],
  exports: [ RouterModule ]
})
export class CheckoutRoutingModule { }
