import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../core/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductRepository {
  // URLs para cada operación
  private viewProductsUrl = 'http://localhost:8080/view-products'; 
  private createProductUrl = 'http://localhost:8080/products';
  private deleteProductUrl = 'http://localhost:8080/delete-products/';
  private updateProductUrl = 'http://localhost:8080/update-products/';
  private getbyidProductUrl = 'http://localhost:8080/view-products-id/'; // ✅ Nueva ruta para buscar por ID

  constructor(private http: HttpClient) {}

  // Obtener todos los productos
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.viewProductsUrl);
  }

  // Obtener un producto por su nombre
  getByName(name: string): Observable<Product> {
    return this.http.get<Product>(`${this.viewProductsUrl}/${name}`);
  }

  // Obtener un producto por su ID
  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.getbyidProductUrl}${id}`);
  }

  // Crear un nuevo producto
  create(product: Product, options?: any): Observable<any> {
    return this.http.post(this.createProductUrl, product, options);
  }
  

  // Actualizar un producto por su nombre
  update(name: string, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.updateProductUrl}${name}`, product);
  }

  // Eliminar un producto por su nombre
  delete(name: string): Observable<any> {
    return this.http.delete(`${this.deleteProductUrl}${name}`, { responseType: 'text' as 'json' });
  }
  
}
