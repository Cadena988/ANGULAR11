import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { ListaComponent } from './lista-grid/lista.component';
import { Lista2Component } from './lista-lista/lista2.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  {
    path: 'home',
    component: PrincipalComponent,
    data: { pageTitle: 'Principal' },

  },
  {
    path: 'listaGrid',
    component: ListaComponent,
    data: { pageTitle: 'Principal' },

  },
  {
    path: 'listaLista',
    component: Lista2Component,
    data: { pageTitle: 'Principal' },

  },
  {
    path: 'carrito',
    component: CarritoComponent,
    data: { pageTitle: 'Principal' },

  },
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
