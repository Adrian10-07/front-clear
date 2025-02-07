import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../core/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductRepository {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}
  
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/view-products`);
  }
  
  getByName(name: string): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/view-products/${name}`);
  }
  
  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/view-products-id/${id}`);
  }
  
  create(product: Product, options?: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/products`, product, options);
  }
  
  update(id: number, product: Product, options?: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update-products/${id}`, product, options);
  }
  
  delete(name: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-products/${name}`, { responseType: 'text' as 'json' });
  }
}  
