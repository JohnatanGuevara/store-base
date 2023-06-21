import { Component } from '@angular/core';
import { Product } from '../models/models';
import { CartService } from '../services/cart.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent {

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

  }];
  

  
  searchTerm: string = '';

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    product.isAddedToCart = true;
    
    
    // Emitir evento
    // ...
  }
 

 
 
}


