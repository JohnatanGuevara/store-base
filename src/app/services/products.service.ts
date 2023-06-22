import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { Product } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsCollection: AngularFirestoreCollection<Product>;
  products: Observable<Product[]>;

  constructor(private firestore: AngularFirestore, private afAuth: AngularFireAuth) {
    this.productsCollection = this.firestore.collection<Product>('productos');
    this.products = this.productsCollection.valueChanges();
  }

  getProducts(): Observable<Product[]> {
    return this.products;
  }
}