import Product from '../models/product.models';

export class ProductService {
  public findAll() {
    return Product.find({}).exec();
  }
}
