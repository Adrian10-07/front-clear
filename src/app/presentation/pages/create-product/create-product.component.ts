import { Component } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { ProductRepository } from '../../../data/repositories/product.repository';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  product: Product = { Nombre: '', Precio: 0 };
  errorMessage: string = '';

  constructor(private productRepo: ProductRepository, private router: Router) {}

  onCreate() {
    this.productRepo.create(this.product, { responseType: 'text' as 'json' }).subscribe({
      next: (data) => {
        console.log('Respuesta del backend:', data);
        this.router.navigate(['/view-products']); // Redirige a la lista de productos
      },
      error: (err) => {
        console.error('Error al crear el producto', err);
        this.errorMessage = 'No se pudo crear el producto. Intenta de nuevo.';
      }
    });
  }
  
}
