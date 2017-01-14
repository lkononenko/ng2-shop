import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductsService } from '../products.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  errorMessage: string;
  products: Product[];

  constructor(private productsService: ProductsService,
              private router: Router) { }

  ngOnInit() {
    this.getProducts();
  }

  productDetail(product) {
    this.router.navigate(['/products', product.slug]);
    this.productsService.currentProduct = product;
  }

  private getProducts() {
    this.productsService.getProducts()
      .subscribe(
        (products: Product[]) => this.products = products,
        (error: string) => this.errorMessage = error
      );
  }
}
