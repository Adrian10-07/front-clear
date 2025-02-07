import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../core/models/product.model';
import { ProductRepository } from '../../data/repositories/product.repository';

@Injectable({
  providedIn: 'root'
})
export class CreateProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  execute(product: Product): Observable<Product> {
    return this.productRepository.create(product);
  }
}
