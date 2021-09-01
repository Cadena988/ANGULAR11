import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Product } from '../domain/product';
import { FilterPipe } from '../filter.pipe';
import { Car, CarService } from '../services/carservice';
import { ProductService } from '../services/productservice';

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

  constructor(
    private productService: ProductService,
    private http: HttpClient,
    private serCar: CarService,
    private dt: FilterPipe
  ) { }

  ngOnInit() {
    this.productService.getProducts().then(data => this.products = data);

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
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



 public applyFilterGlobal($event: any, stringVal: string) {
    this.dt.transform(this.products, stringVal);
  }
}
