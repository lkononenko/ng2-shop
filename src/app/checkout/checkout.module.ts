import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { CheckoutService } from './checkout.service';
import { SharedModule } from '../shared/shared.module';
import { PersonalDetailsFormComponent } from './personal-details-form/personal-details-form.component';
import { PersonalDetailsFormService } from './personal-details-form/personal-details-form.service';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

    CheckoutRoutingModule,
    SharedModule
  ],
  declarations: [ CheckoutComponent, PersonalDetailsFormComponent, ConfirmationComponent ],
  providers: [ CheckoutService, PersonalDetailsFormService ]
})
export class CheckoutModule { }
