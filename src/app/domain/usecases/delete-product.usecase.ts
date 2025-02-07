import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductRepository } from '../../data/repositories/product.repository';

@Injectable({
  providedIn: 'root'
})
export class DeleteProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  execute(name: string): Observable<any> {
    return this.productRepository.delete(name);
  }
}
