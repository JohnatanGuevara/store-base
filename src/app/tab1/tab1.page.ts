import { Component, OnInit } from '@angular/core';
import { Product } from '../models/models';
import { CartService } from '../services/cart.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  filteredProducts: Product[] = [];

  ngOnInit() {
    this.filterProducts();
  }

  constructor(private cartService: CartService, private platform: Platform) 
  { const screenHeight = window.innerHeight;
    const contentHeight = screenHeight * 0.20;
    const spaceAboveContent = screenHeight - contentHeight;
    this.marginTop = spaceAboveContent;}

    marginTop: number;


  products: Product[] = [{
    id: "1",
    nombre: "Desodorante Rexona",
    precio: 10,
    image: "assets/img/rexona.jpg",
    stock: "5",
    descripcion: "150ml",
    cantidad: 1,
    isAddedToCart: false,

  },
  {id:"2",
    nombre: "Harina P.A.N",
    precio: 1.2,
    image: "assets/img/harinapan.jpg",
    stock: "5",
    descripcion: "1Kg",
    cantidad: 1,
    isAddedToCart: false,

  },
  {id:"3",
    nombre: "Acetaminofen",
    precio: 5,
    image: "assets/img/acetaminofen.jpg",
    stock: "5",
    descripcion: "100mg",
    cantidad: 1,
    isAddedToCart: false,

  },
  {id:"2",
    nombre: "Lentes de Sol ADIDAS",
    precio: 50,
    image: "assets/img/lentes de sol.png",
    stock: "5",
    descripcion: "Nuevos",
    cantidad: 1,
    isAddedToCart: false,

  }];
  

  
  searchTerm: string = '';

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


