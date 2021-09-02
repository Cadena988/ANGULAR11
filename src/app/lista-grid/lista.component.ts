import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Product } from '../domain/product';
import { FilterPipe } from '../filter.pipe';
import { Car, CarService } from '../services/carservice';
import { ProductService } from '../services/productservice';
import {ConfirmationService, MessageService} from 'primeng/api';

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
  cars: Car[] = [];
  listaCarrito: Product[] = [];
  productDialog: boolean = false;
  submitted: boolean = false;

  constructor(
    private productService: ProductService,
    private http: HttpClient,
    private serCar: CarService,
    private dt: FilterPipe,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {  
    this.listaCarrito = new Array();
   }

  ngOnInit() {
    this.productService.getProducts().then(data => this.products = data);

    this.sortOptions = [
      { label: 'Precio de Mayor a Menor', value: '!price' },
      { label: 'Precio de Menor a Mayor', value: 'price' }
    ];
    this.serCar.getCarsLarge().then(data => {
      this.cars = data;
    })
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
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
    
    
    this.listaCarrito.push(event)
    console.log(this.listaCarrito);
    this.productService.postCarrito(this.listaCarrito);
  }

    onAbrirCarrito(){

    }

 public applyFilterGlobal($event: any, stringVal: string) {
    this.dt.transform(this.products, stringVal);
  }

  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
}
  
  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
}
}
