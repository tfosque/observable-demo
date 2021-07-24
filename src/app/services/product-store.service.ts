import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { filter } from 'lodash';

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
    const dups = this.isDuplicate(newProduct);
    /* Stop if already selected */
    if (dups.length > 0) {
      // console.log({ dups });
      return;
    }
    /* contiue... if not selected*/
    const oldProducts = [...this.selectedProducts.value];
    this.selectedProducts.next([...oldProducts, newProduct]);
  }

  public removeSelections(product: any) {
    const oldProducts = this.selectedProducts.value;
    // console.log({ oldProducts });

    const filterSelections = oldProducts.filter((f: any) => {
      return f.id !== product.id;
    });
    // console.log({ filterSelections });
    this.selectedProducts.next(filterSelections);

    /* Lodash */
    /* const x = filter(oldProducts, (i: any) => {
      return i !== product.id;
    });
    console.log({ x }); */
  }

  isDuplicate(product: any) {
    const oldProducts = this.selectedProducts.value;
    const filterSelections = oldProducts.filter((f: any) => {
      return f.id === product.id;
    });
    return filterSelections;
  }
}
