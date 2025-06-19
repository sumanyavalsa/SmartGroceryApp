import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockDataService } from '../../services/mock-data.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  categories: string[] = ['vegetables', 'fruits', 'chocolates', 'eggs', 'bread', 'meats', 'protein-shakes'];
  selectedCategory: string = '';
  cartItems: { product: Product; quantity: number }[] = [];

  constructor(
    private mockDataService: MockDataService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedCategory = params['category'];
      this.loadProducts();
    });

    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });
  }

  loadProducts(): void {
    if (this.selectedCategory) {
      this.mockDataService.getMockProductsByCategory(this.selectedCategory).subscribe(products => {
        this.products = products;
      });
    } else {
      this.mockDataService.getMockProducts().subscribe(products => {
        this.products = products;
      });
    }
  }

  onCategoryChange(event: MatSelectChange): void {
    this.selectedCategory = event.value;
    this.loadProducts();
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  increaseQuantity(productId: string): void {
    this.cartService.increaseQuantity(productId);
  }

  decreaseQuantity(productId: string): void {
    this.cartService.decreaseQuantity(productId);
  }

  getQuantity(productId: string): number {
    const item = this.cartItems.find(item => item.product._id === productId);
    return item ? item.quantity : 0;
  }
} 