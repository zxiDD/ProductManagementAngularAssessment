import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: any[] = [];
  constructor(public http: HttpClient) {}

  getProducts() {
    return this.http.get('http://localhost:4200/assets/db.json');
  }

  deleteProduct(pid?: number) {
    let idx = this.products.findIndex((b) => b.pid === pid);
    this.products.splice(idx, 1);
  }
}
