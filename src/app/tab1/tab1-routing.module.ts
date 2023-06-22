import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { CarritoComponent } from '../carrito/carrito.component';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {path: 'carrito', component: CarritoComponent}
];

@NgModule({
  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
