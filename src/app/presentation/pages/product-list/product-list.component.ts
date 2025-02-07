import { Component, OnInit } from '@angular/core';
import { GetProductsUseCase } from '../../../domain/usecases/get-products.usecase';
import { Product } from '../../../core/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private getProductsUseCase: GetProductsUseCase, private router: Router) {}

  ngOnInit(): void {
    this.getProductsUseCase.execute().subscribe(data => {
      this.products = data;
    });
  }
  
  onUpdate(productId: number) {
    console.log(`Redirigiendo a /update-product/${productId}`); // ✅ Depuración
    this.router.navigate([`/update-product/${productId}`]);
  }
  onCreate(){
    this.router.navigate([`/create-product`]);
  }
  
}
