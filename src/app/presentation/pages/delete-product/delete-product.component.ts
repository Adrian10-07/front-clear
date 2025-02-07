import { Component } from '@angular/core';
import { DeleteProductUseCase } from '../../../domain/usecases/delete-product.usecase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {
  productName: string = '';
  errorMessage: string = '';

  constructor(private deleteProductUseCase: DeleteProductUseCase, private router: Router) {}

  onDelete() {
    if (this.productName.trim() !== '') {
      this.deleteProductUseCase.execute(this.productName).subscribe({
        next: (data) => {
          console.log(`Producto eliminado: ${data}`);
          this.router.navigate(['/view-products']);
        },
        error: (err) => {
          console.error('Error al eliminar el producto', err);
          this.errorMessage = `No se pudo eliminar el producto ${this.productName}.`;
        }
      });
    } else {
      this.errorMessage = 'Por favor, ingresa un nombre de producto válido.';
    }
  }
}
