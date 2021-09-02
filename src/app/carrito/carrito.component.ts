import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { SelectItem, ConfirmationService, MessageService } from 'primeng/api';
import { Product } from '../domain/product';
import { FilterPipe } from '../filter.pipe';
import { Car, CarService } from '../services/carservice';
import { ProductService } from '../services/productservice';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  products: Product[] = [];
  product!: Product;
  sortKey: any;
  sortOptions: SelectItem[] = [];

  sortOrder!: number;
  inventoryStatus: any;
  sortField!: string;
  cars: Car[] = [];

  @Input() listaCarrito: Product[] = [];

  constructor(
    private productService: ProductService,
    private http: HttpClient,
    private serCar: CarService,
    private dt: FilterPipe,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.productService.getProducts().then(data => this.products = data);

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
    this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });


    this.listaCarrito.push(event)
    console.log(this.listaCarrito);
  }
}
