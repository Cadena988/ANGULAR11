import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Product } from '../domain/product';
import { FilterPipe } from '../filter.pipe';
import { ProductService } from '../services/productservice';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  products: Product[] = [];
  product!: Product;
  sortKey: any;
  sortOptions: SelectItem[] = [];

  sortOrder!: number;
  inventoryStatus: any;
  sortField!: string;
  listaCarrito: Product[] = [];
  productDialog: boolean = false;
  CarDialog: boolean = false;
  submitted: boolean = false;
  nuevoItem: any;
  statuses: any[] = [];

  constructor(
    private productService: ProductService,
    private dt: FilterPipe,
    private messageService: MessageService,
  ) {
    this.listaCarrito = new Array();
  }

  ngOnInit() {
    this.productService.getProducts().then(data => this.products = data);
    this.statuses = [
      { label: 'INSTOCK', value: 'instock' },
      { label: 'LOWSTOCK', value: 'lowstock' },
      { label: 'OUTOFSTOCK', value: 'outofstock' }
    ];
    this.sortOptions = [
      { label: 'Precio de Mayor a Menor', value: '!price' },
      { label: 'Precio de Menor a Mayor', value: 'price' }
    ];
  }


  addItem() {
    this.product.image = 'product-placeholder.svg';
    this.products.push(this.product);

    this.products = [...this.products];
    this.product = {};
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Producto Agregado Satisfactoriamente', life: 3000 });
    this.hideDialog();
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  addCarrito(event: any) {
    this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Producto Agregado al Carrito' });
    this.listaCarrito.push(event)
    this.productService.postCarrito(this.listaCarrito);
    this.hideDialog();
  }

  public applyFilterGlobal($event: any, stringVal: string) {
    this.dt.transform(this.products, stringVal);
  }

  abrirModalAgregar() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }

  abrirCarrito() {
    this.submitted = false;
    this.CarDialog = true;
  }

  vaciarCarrito() {
    this.listaCarrito = [];
    this.submitted = false;
    this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Productos eliminados con exito' });

  }

  hideDialog() {
    this.productDialog = false;
    this.CarDialog = false;
    this.submitted = false;
  }
}
