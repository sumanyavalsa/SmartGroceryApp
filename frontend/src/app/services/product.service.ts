import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { MockDataService } from './mock-data.service';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = `${environment.apiUrl}/products`;

  constructor(
    private http: HttpClient,
    private mockDataService: MockDataService
  ) { }

  getProducts(): Observable<Product[]> {
    // For development/testing, use mock data
    return this.mockDataService.getMockProducts();
    // For production, use the actual API
    // return this.http.get<Product[]>(this.apiUrl);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/category/${category}`);
  }

  getProductById(id: string): Observable<Product | undefined> {
    // For development/testing, use mock data
    return this.mockDataService.getMockProductById(id);
    // For production, use the actual API
    // return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
} 