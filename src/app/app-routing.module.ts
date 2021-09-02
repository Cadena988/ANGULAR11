import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { ListaComponent } from './lista-grid/lista.component';
import { Page404Component } from './page404/page404.component';
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
    path: 'page404',
    component: Page404Component,
    data: { pageTitle: 'Page404' },

  },
  {
    path: 'carrito',
    component: CarritoComponent,
    data: { pageTitle: 'Car' },

  },
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
