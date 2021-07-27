import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY } from 'rxjs';
import { filter, sortBy, uniqBy } from 'lodash';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductStoreService {
  private apiTestProducts = 'http://localhost:3000/test-products';

  private products = new BehaviorSubject<any>([]);
  public products$ = this.products.asObservable();

  private selectedProducts = new BehaviorSubject<any[]>([]);
  public selectedProducts$ = this.selectedProducts.asObservable();

  constructor(private readonly http: HttpClient) {}

  /* MongoDB Cloud Endpoints */
  public getProducts(currPage = 36): void {
    this.http
      .get<any>(this.apiTestProducts)
      .pipe(
        retry(3),
        catchError((err) => {
          console.log({ err });
          return EMPTY;
        })
      )
      .subscribe((p) => {
        const page = p.slice(0, currPage);
        const sorted = this.sort(page);
        this.products.next(sorted);
      });
  }

  public getSelectedProducts(): any[] {
    return this.selectedProducts.value;
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
    const filterSelections = oldProducts.filter((f: any) => {
      return f.id !== product.id;
    });
    this.selectedProducts.next(filterSelections);
  }

  /* Utils */
  /* TODO: Already Selected or Alredy in Cart ...Refine Login */
  private isDuplicate(product: any) {
    const oldProducts = this.selectedProducts.value;
    const filterSelections = oldProducts.filter((f: any) => {
      return f.id === product.id;
    });
    if (filterSelections.length > 0) {
      alert(`${product.name} was already selected`);
      return filterSelections;
      /* dont save */
    }
    return filterSelections;
  }
  /* Sort */
  private sort(items: any[]) {
    const sort = sortBy(items, ['name']);
    return uniqBy(sort, 'name');
  }
}
