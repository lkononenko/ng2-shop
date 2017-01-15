import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { ProductsService } from '../products/products.service';
import { Product } from '../products/product.model';

@Injectable()
export class CheckoutService {
  // item: Product | Service;
  item: Product;
  customer: { fullName: string; };

  // private itemGotten = new BehaviorSubject<Product | Service>(this.item);
  private itemGotten = new BehaviorSubject<Product>(this.item);
  public notifyItemGotten = this.itemGotten.asObservable();

  constructor(private productsService: ProductsService,
              private router: Router) { }

  getCheckoutItem(params) {
    switch (params['type']) {
      case 'product': return this.getProduct(params['slug']);
      case 'service': return this.getService();
      default: this.router.navigate(['/products']);
    }
  }

  private getProduct(slug: string) {
    if (this.productsService.currentProduct) {
      this.itemGotten.next(this.productsService.currentProduct);
    } else {
      this.productsService.getProductBySlug(slug).subscribe(
        (product: Product) => this.itemGotten.next(product)
      );
    }
  }

  private getService() {

  }

}
