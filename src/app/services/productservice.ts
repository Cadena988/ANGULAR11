import { Injectable } from "@angular/core";
import { Product } from "../domain/product";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";


@Injectable()
export class ProductService {
    baseURL: string = "http://localhost:4200/";
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

    addPerson(person:any): Observable<any> {
        const headers = { 'content-type': 'application/json'}  
        const body=JSON.stringify(person);
        console.log(body)
        return this.http.post('assets/data/carrito.json', body,{'headers':headers})
      }

}