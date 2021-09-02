import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaRoutingModule } from './lista-routing.module';
import { ButtonModule } from 'primeng/button';
import { DataViewLayoutOptions } from 'primeng/dataview';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListaRoutingModule,
    ButtonModule,
    DataViewLayoutOptions,
  ]
})
export class ListaModule { }
