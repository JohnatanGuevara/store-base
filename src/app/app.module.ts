import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CartService } from './services/cart.service';
import { Router, RouterModule, Routes, ExtraOptions} from '@angular/router'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarritoComponent } from './carrito/carrito.component';
import { Tab1Page } from './tab1/tab1.page';
import {AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
{ path: 'carrito', component: CarritoComponent},
{path:'payment', component: PaymentComponent}
]



@NgModule({
  declarations: [AppComponent, CarritoComponent, PaymentComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, RouterModule. forRoot(routes), AngularFireModule.initializeApp(environment.firebaseConfig), AngularFirestoreModule, IonicModule],
  exports:[RouterModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
