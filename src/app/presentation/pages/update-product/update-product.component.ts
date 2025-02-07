import { Component } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { ProductRepository } from '../../../data/repositories/product.repository';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  product: Product = { Nombre: '', Precio: 0 };
  errorMessage: string = '';
  productId: number | null = null;
  productName: string = '';

  constructor(
    private productRepo: ProductRepository,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.productId = Number(this.activatedRoute.snapshot.paramMap.get('id')); // Intenta obtener el ID de la URL
    this.productName = this.activatedRoute.snapshot.paramMap.get('name') || ''; // O intenta obtener el nombre

    if (this.productId) {
      // Si hay un ID, buscamos por ID
      this.productRepo.getById(this.productId).subscribe({
        next: (data) => {
          this.product = data;
        },
        error: (err) => {
          console.error('Error obteniendo el producto por ID', err);
          this.errorMessage = 'No se pudo encontrar el producto con este ID.';
        }
      });
    } else if (this.productName) {
      // Si no hay ID, buscamos por nombre
      this.productRepo.getByName(this.productName).subscribe({
        next: (data) => {
          this.product = data;
        },
        error: (err) => {
          console.error('Error obteniendo el producto por nombre', err);
          this.errorMessage = 'No se pudo encontrar el producto con este nombre.';
        }
      });
    }
  }

  onUpdate() {
    if (this.productName) {
      this.productRepo.update(this.productName, this.product).subscribe({
        next: (data) => {
          console.log('Producto actualizado:', data);
          this.router.navigate(['/view-products']);
        },
        error: (err) => {
          console.error('Error al actualizar el producto', err);
          this.errorMessage = 'No se pudo actualizar el producto. Intenta de nuevo.';
        }
      });
    }
  }
}
