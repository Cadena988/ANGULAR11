import { Injectable } from "@angular/core";
import { Product } from "../domain/product";
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ProductService {

    status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get<any>('assets/data/products.json')
            .toPromise()
            .then(res => <Product[]>res.data)
            .then(data => { return data; });
    }

    getRecomendado() {
        return this.http.get<any>('assets/data/recomendado.json')
            .toPromise()
            .then(res => <Product[]>res.data)
            .then(data => { return data; });
    }

    postCarrito(items: any[]) {
        return this.http.post(`assets/data/products.json`, items);

    }

}