import { Injectable } from "@angular/core";
import { Product } from "../domain/product";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CarService {

    constructor(private http: HttpClient) {}

    getCarsLarge() {
        return this.http.get<any>('/showcase/resources/data/cars-large.json')
                    .toPromise()
                    .then(res => <Car[]>res.data)
                    .then(data => { return data; });
    }
    getProducts() {
        return this.http.get<any>('assets/data/products.json')
        .toPromise()
        .then(res => <Product[]>res.data)
        .then(data => { return data; });
    }
}
export interface Car {
    vin: any;
    year: any;
    brand: any;
    color: any;
}