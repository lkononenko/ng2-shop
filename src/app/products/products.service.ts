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

  constructor(private http: Http) { }

  getProducts(): Observable<Product[]> {
    return this.http.get(CONST.API_URL + 'products.json')
      .map(this.extractProducts)
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
