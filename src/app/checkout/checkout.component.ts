import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CheckoutService } from './checkout.service';
import { Product } from '../products/product.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  // item: Product | Service;
  item: Product;

  constructor(private checkoutService: CheckoutService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCheckoutItem();

    this.checkoutService.notifyItemGotten.subscribe(item => this.item = item);
  }

  private getCheckoutItem() {
    this.route.params.subscribe(
      (params: Params) => this.checkoutService.getCheckoutItem(params)
    );
  }
}
