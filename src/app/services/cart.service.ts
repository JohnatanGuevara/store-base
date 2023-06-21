import { Injectable } from '@angular/core';
import { Product } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  private cartItems: Product[] = [];

  addToCart(product: Product) {
    this.cartItems.push(product);
  }

  getCartItems() {
    return this.cartItems;
  }
}

