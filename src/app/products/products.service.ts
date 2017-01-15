import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Product } from './product.model';
import { CONST } from '../const';

@Injectable()
export class ProductsService {
  currentProduct: Product;
  private productsApiUrl: string = CONST.API_URL + 'products.json';

  constructor(private http: Http,
              private router: Router) { }

  getProducts(): Observable<Product[]> {
    return this.http.get(this.productsApiUrl)
      .map(this.extractProducts)
      .catch(this.handleError);
  }

  getProductBySlug(slug: string) {
    return this.http.get(this.productsApiUrl)
      .map((res: Response) => {
        let foundProduct = res.json().filter(product => product.slug === slug);
        if (foundProduct[0]) {
          return new Product(foundProduct[0]);
        } else {
          this.router.navigate(['/products'])
        }
      })
      .catch(this.handleError);
  }

  private extractProducts(res: Response) {
    return res.json().map(
      product => new Product(product)
    );
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      errMsg = `${error.status} - ${error.statusText || ''}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

}
