import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductStoreService {
  // private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private apiTestProducts = 'http://localhost:3000/test-products';

  private products = new BehaviorSubject<any>([]);
  public products$ = this.products.asObservable();

  private selectedProducts = new BehaviorSubject<any>([]);
  public selectedProducts$ = this.selectedProducts.asObservable();

  constructor(private readonly http: HttpClient) {}

  /* MongoDB Cloud Endpoints */
  public getProducts(): void {
    this.http
      .get<any>(this.apiTestProducts)
      .pipe()
      .subscribe((p) => {
        this.products.next(p);
      });
  }

  public addToSelectedProducts(newProduct: any) {
    const oldProducts = [...this.selectedProducts.value];
    // console.log({ oldProducts });

    this.selectedProducts.next([...oldProducts, newProduct]);
    console.log('this:new:', this.selectedProducts.value);
  }
}
