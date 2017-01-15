import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsService } from './products.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,

    ProductsRoutingModule,
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  providers: [ ProductsService ]
})
export class ProductsModule { }
