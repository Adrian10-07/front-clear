import { Component } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { UpdateProductUseCase } from '../../../domain/usecases/update-product.usecase';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  product: Product = { Id: 0, Nombre: '', Precio: 0 };
  errorMessage: string = '';
  productId: number = 0;

  constructor(
    private updateProductUseCase: UpdateProductUseCase,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const idParam = this.activatedRoute.snapshot.paramMap.get('id');
    this.productId = idParam ? parseInt(idParam, 10) : 0;
  }

  onUpdate() {
    if (this.productId) {
      this.updateProductUseCase.execute(this.productId, this.product).subscribe({
        next: (data) => {
          console.log('Respuesta del backend:', data);
          this.router.navigate(['/view-products']);
        },
        error: (err) => {
          console.error('Error al actualizar el producto', err);
          this.errorMessage = 'No se pudo actualizar el producto.';
        }
      });
    }
  }
  
  
  
}
