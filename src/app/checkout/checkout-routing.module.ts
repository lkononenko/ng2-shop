import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckoutComponent } from './checkout.component';

const checkoutRoutes: Routes = [
  { path: 'checkout/:type/:slug', component: CheckoutComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(checkoutRoutes) ],
  exports: [ RouterModule ]
})
export class CheckoutRoutingModule { }