import { Component, OnInit } from '@angular/core';
import { GetProductsUseCase } from '../../../domain/usecases/get-products.usecase';
import { Product } from '../../../core/models/product.model';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private getProductsUseCase: GetProductsUseCase) {}

  ngOnInit(): void {
    this.getProductsUseCase.execute().subscribe(data => {
      this.products = data;
    });
  }
}
