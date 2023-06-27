import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Product } from './models/models';
import { doc, updateDoc} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(private firestore: AngularFirestore, private afAuth: AngularFireAuth) { }

  guardarPago(product: Product[], metodoPago: string, id: string, numeroTelefono: string, totalPrice:number, referencia:string, cedulaPagador:string, nombrePagador:string): Promise<DocumentReference<unknown>> {
    const pagoData = {
      productos: product.map(item => ({
        nombre: item.nombre,
        cantidad: item.cantidad,
        precio: item.precio
      })),
      metodoPago: metodoPago,
      id: id,
      numeroTelefono: numeroTelefono,
      totalPrice: totalPrice,
      referencia: referencia,
      cedulaPagador: cedulaPagador,
      nombrePagador:nombrePagador
      
    };

    return this.firestore.collection('pagos').add(pagoData)
      .then(docRef => {
        const pagoId = docRef.id;
        return docRef.update({ id: pagoId })
          .then(() => {
            console.log("Pago Registrado con el id:", pagoId);
            return docRef; // Devolver el docRef
          });
      });
  }
}