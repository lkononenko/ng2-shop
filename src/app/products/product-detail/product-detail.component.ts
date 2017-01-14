import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '../products.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  errorMessage: string;

  constructor(private productsService: ProductsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProduct();
  }

  private getProduct() {
    if (this.productsService.currentProduct) {
      this.product = this.productsService.currentProduct;
    } else {
      this.route.params.subscribe(
        (params: Params) => this.getCurrentProduct(params['slug'])
      );
    }
  }

  private getCurrentProduct(slug: string) {
    this.productsService.getCurrentProduct(slug).subscribe(
      (product: Product) => this.product = product,
      (error: string) => this.errorMessage = error
    );
  }

}
