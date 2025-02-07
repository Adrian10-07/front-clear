import { Component } from '@angular/core';
import { ProductRepository } from '../../../data/repositories/product.repository';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {
  productName: string = ''; // ✅ Ahora usamos el nombre en lugar del ID
  errorMessage: string = '';

  constructor(private productRepo: ProductRepository, private router: Router) {}

  onDelete() {
    if (this.productName.trim() !== '') {
      this.productRepo.delete(this.productName).subscribe({
        next: (data) => {
          console.log(`Producto eliminado: ${data}`); // ✅ Verifica que la respuesta se imprima correctamente
          this.router.navigate(['/view-products']);
        },
        error: (err) => {
          console.error('Error al eliminar el producto', err);
          this.errorMessage = `No se pudo eliminar el producto ${this.productName}. Intenta de nuevo.`;
        }
      });
    } else {
      this.errorMessage = 'Por favor, ingresa un nombre de producto válido.';
    }
  }
  
}
