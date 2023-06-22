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

  ngOnInit(): void {
    
  }

}