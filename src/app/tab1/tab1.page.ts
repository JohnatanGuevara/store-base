import { Component, OnInit } from '@angular/core';
import { Product } from '../models/models';
import { CartService } from '../services/cart.service';
import { Platform } from '@ionic/angular';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  filteredProducts: Product[] = [];
  searchTerm: string = '';

  constructor(
    private cartService: CartService,
    private platform: Platform,
    private productsService: ProductsService
  ) {
    const screenHeight = window.innerHeight;
    const contentHeight = screenHeight * 0.20;
    const spaceAboveContent = screenHeight - contentHeight;
    this.marginTop = spaceAboveContent;
  }

  marginTop: number;

  ngOnInit() {
    this.filterProducts();
    this.loadProducts();
  }

  products: Product[] = [];

  loadProducts() {
    this.productsService.getProducts().subscribe(products => {
      this.products = products;
      this.filterProducts();
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    // Emitir evento
    // ...
  }

  filterProducts() {
    this.filteredProducts = this.products.filter(product =>
      product.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}