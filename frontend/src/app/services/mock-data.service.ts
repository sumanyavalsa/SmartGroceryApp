import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  private mockProducts: Product[] = [
    {
      _id: '1',
      name: 'Fresh Milk',
      category: 'dairy',
      price: 3.99,
      description: 'Fresh, pasteurized whole milk, rich in calcium and protein.',
      imageUrl: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      stock: 100
    },
    {
      _id: '2',
      name: 'Fresh Apples',
      category: 'fruit',
      price: 2.99,
      description: 'Fresh and juicy red apples, perfect for snacking or baking.',
      imageUrl: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      stock: 50
    },
    {
      _id: '3',
      name: 'Bananas',
      category: 'fruit',
      price: 1.99,
      description: 'Sweet and nutritious bananas, great for a quick energy boost.',
      imageUrl: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      stock: 30
    },
    {
      _id: '4',
      name: 'Oranges',
      category: 'fruit',
      price: 3.49,
      description: 'Juicy and vitamin C rich oranges, perfect for juicing or snacking.',
      imageUrl: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      stock: 40
    },
    {
      _id: '5',
      name: 'Strawberries',
      category: 'fruit',
      price: 4.99,
      description: 'Sweet and fresh strawberries, great for desserts or smoothies.',
      imageUrl: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      stock: 25
    },
    {
      _id: '6',
      name: 'Fresh Tomatoes',
      category: 'vegetable',
      price: 2.99,
      description: 'Ripe, juicy tomatoes perfect for salads and cooking.',
      imageUrl: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      stock: 50
    },
    {
      _id: '7',
      name: 'Dark Chocolate',
      category: 'chocolate',
      price: 4.99,
      description: 'Rich, dark chocolate with 70% cocoa content.',
      imageUrl: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      stock: 30
    },
    {
      _id: '8',
      name: 'Eggs',
      category: 'egg',
      price: 3.99,
      description: 'Farm-fresh eggs from free-range chickens.',
      imageUrl: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      stock: 40
    },
    {
      _id: '9',
      name: 'Whole Grain Bread',
      category: 'bread',
      price: 2.49,
      description: 'Freshly baked whole grain bread.',
      imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      stock: 25
    },
    {
      _id: '10',
      name: 'Grass-fed Beef',
      category: 'meat',
      price: 12.99,
      description: 'Premium quality grass-fed beef steaks.',
      imageUrl: 'https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      stock: 25
    },
    {
      _id: '11',
      name: 'Whey Protein Powder',
      category: 'protein',
      price: 29.99,
      description: 'High-quality whey protein powder for muscle recovery.',
      imageUrl: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      stock: 20
    }
  ];

  getMockProductsByCategory(category: string): Observable<Product[]> {
    return of(this.mockProducts.filter(product => product.category === category));
  }

  getMockProducts(): Observable<Product[]> {
    return of(this.mockProducts);
  }

  getMockProductById(id: string): Observable<Product | undefined> {
    return of(this.mockProducts.find(product => product._id === id));
  }
} 