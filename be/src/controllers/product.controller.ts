import { NextFunction, Request, Response } from 'express';
import { ProductService } from '../services/product.service';

export class ProductController {
  private productService;

  constructor(productService: ProductService) {
    this.productService = productService;
  }

  public findAll = async (_: Request, res: Response, next: NextFunction) => {
    try {
      const products = await this.productService.findAll();
      res.send(products);
    } catch (error) {
      // TODO add error handling
      next(error);
    }
  };
}
