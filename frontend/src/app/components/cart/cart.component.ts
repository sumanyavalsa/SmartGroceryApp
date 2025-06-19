import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService, CartItem } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });
  }

  increaseQuantity(productId: string): void {
    if (productId) {
      const item = this.cartItems.find(item => item.product._id === productId);
      if (item) {
        this.cartService.updateQuantity(productId, item.quantity + 1);
      }
    }
  }

  decreaseQuantity(productId: string): void {
    if (productId) {
      const item = this.cartItems.find(item => item.product._id === productId);
      if (item && item.quantity > 1) {
        this.cartService.updateQuantity(productId, item.quantity - 1);
      }
    }
  }

  removeFromCart(productId: string): void {
    if (productId) {
      this.cartService.removeFromCart(productId);
    }
  }

  getTotal(): number {
    return this.cartService.getTotal();
  }

  checkout(): void {
    // TODO: Implement checkout functionality
    console.log('Proceeding to checkout...');
  }
} 