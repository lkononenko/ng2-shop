import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.getProduct();
  }

  goToCheckout() {
    this.productsService.currentProduct = this.product;
    this.router.navigate(['/checkout', 'product', this.product.slug]);
  }

  private getProduct() {
    if (this.productsService.currentProduct) {
      this.product = this.productsService.currentProduct;
    } else {
      this.route.params.subscribe(
        (params: Params) => this.productsService.getProductBySlug(params['slug']).subscribe(
          (product: Product) => this.product = product,
          (error: string) => this.errorMessage = error
        )
      );
    }
  }
}
