import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../products/product.model';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: []
})
export class ConfirmationComponent implements OnInit {
  item: Product;
  customer: { fullName: string; };

  constructor(private checkoutService: CheckoutService,
              private router: Router) { }

  ngOnInit() {
    this.getConfirmationData();
  }

  private getConfirmationData() {
    this.item = this.checkoutService.item;
    this.customer = this.checkoutService.customer;

    if (!this.item && !this.customer) {
      this.router.navigate(['/products']);
    }
  }
}
