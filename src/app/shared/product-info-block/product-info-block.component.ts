import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../products/product.model';

@Component({
  selector: 'app-product-info-block',
  templateUrl: './product-info-block.component.html',
  styleUrls: ['./product-info-block.component.scss']
})
export class ProductInfoBlockComponent implements OnInit {
  @Input() product: Product;
  @Input() buttonTitle: string;
  @Input() clickableImage: boolean = false;
  @Output() buttonClicked: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  public clickButton() {
    this.buttonClicked.emit();
  }
}
