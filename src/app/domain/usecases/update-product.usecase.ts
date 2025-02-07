import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../core/models/product.model';
import { ProductRepository } from '../../data/repositories/product.repository';

@Injectable({
  providedIn: 'root'
})
export class UpdateProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  execute(id: number, product: Product): Observable<string> {
    return this.productRepository.update(id, product, { responseType: 'text' as 'json' });
  }
  
}
