import { Component, OnInit } from '@angular/core';
import { Product } from '../models/models';
import { CartService } from '../services/cart.service';
import { PaymentService } from '../payment.service';
import { DocumentReference } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent  implements OnInit {

  cartItems: Product[] = [];
  totalPrice: number = 0;
  subtotal: number = 0;
  metodoPago: string = '';
  id: string = '';
  numeroTelefono: string = '';
  cedulaPagador:string= '';
  referencia: string= '';
  nombrePagador:string='';

  constructor(private cartService: CartService, private paymentService: PaymentService) {}


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

  guardarPago() {
    const montoTotal = this.cartItems.reduce(
      (total, item) => total + item.precio * item.cantidad,
      0
    );

    this.paymentService.guardarPago(this.cartItems, this.metodoPago, this.id, this.numeroTelefono, this.totalPrice, this.cedulaPagador, this.referencia, this.nombrePagador)
      .then(() => {
     
        
       
        // Restablecer valores o realizar acciones adicionales después de guardar el pago
      })
      .catch(error => {
        console.error('Error al guardar el pago', error);
        // Manejar el error adecuadamente
      });
  }
}
