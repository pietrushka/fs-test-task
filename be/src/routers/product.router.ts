import { Router } from 'express';
import { ProductService } from '../services/product.service';
import { ProductController } from '../controllers/product.controller';

class ProductRouter {
  private controller;
  public router;

  constructor() {
    const productService = new ProductService();
    this.controller = new ProductController(productService);
    this.router = Router();
    this.registerRoutes();
  }

  registerRoutes() {
    this.router.route('/all').get(this.controller.findAll);
  }
}

export default new ProductRouter().router;
