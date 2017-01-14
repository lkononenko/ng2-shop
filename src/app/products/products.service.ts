import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Product } from './product.model';
import { CONST } from '../const';

@Injectable()
export class ProductsService {
  currentProduct: Product;
  private productsApiUrl: string = CONST.API_URL + 'products.json';

  constructor(private http: Http) { }

  getProducts(): Observable<Product[]> {
    return this.http.get(this.productsApiUrl)
      .map(this.extractProducts)
      .catch(this.handleError);
  }

  getCurrentProduct(slug: string) {
    return this.http.get(this.productsApiUrl)
      .map((res: Response) => {
        let foundProduct = res.json().filter(product => product.slug === slug);
        return this.currentProduct = new Product(foundProduct[0]);
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
