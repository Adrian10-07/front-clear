import { Component } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { CreateProductUseCase } from '../../../domain/usecases/create-product.usecase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  product: Product = { Id:0, Nombre: '', Precio: 0 };
  errorMessage: string = '';

  constructor(private createProductUseCase: CreateProductUseCase, private router: Router) {}

  onCreate() {
    this.createProductUseCase.execute(this.product).subscribe({
      next: (data) => {
        console.log('Producto creado:', data);
        this.router.navigate(['/view-products']);
      },
      error: (err) => {
        console.error('Error al crear el producto', err);
        this.errorMessage = 'No se pudo crear el producto.';
      }
    });
  }
}
