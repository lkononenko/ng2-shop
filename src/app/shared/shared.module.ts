import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfoBlockComponent } from './product-info-block/product-info-block.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ ProductInfoBlockComponent ],
  exports: [ ProductInfoBlockComponent ]
})
export class SharedModule { }
