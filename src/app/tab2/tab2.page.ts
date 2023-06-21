import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/models';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  cartItems: Product[] = [];
  totalPrice: number = 0;
  subtotal: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotalPrice();
    this.totalPrice = Number(this.totalPrice.toFixed(2));
  }

  get hayProductosEnCarrito() {
    return this.cartItems.length > 0;
  }

  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce(
      (total, item) => total + item.precio * item.cantidad,
      0
    );
    this.totalPrice = Number(this.totalPrice.toFixed(2));
  }

  removeItem(item: Product) {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.calculateTotalPrice();
    }
  }

  decreaseQuantity(item: Product) {
    if (item.cantidad > 1) {
      item.cantidad--;
      this.calculateTotalPrice();
    };
    this.totalPrice = Number(this.totalPrice.toFixed(2));
  }

  increaseQuantity(item: Product) {
    item.cantidad++;
    this.calculateTotalPrice();
    this.totalPrice = Number(this.totalPrice.toFixed(2));
  }
  calculateTotal(precio: number, cantidad: number): string {
    const total = precio * cantidad;
    return total.toFixed(2);
  }
}