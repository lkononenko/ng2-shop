import { CONST } from '../const';

export class Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  image: string;

  constructor(product) {
    this.id = product.id;
    this.name = product.name;
    this.slug = product.slug;
    this.description = product.description || '';
    this.price = product.price || 0;
    this.image = CONST.IMAGE_URL + 'products/' + (product.image || CONST.IMAGE_DEFAULT);
  }
}
