import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private readonly http: HttpClient) {}

  /* Simple Funtion returning an observable http request */
  getFakeData() {
    return this.http.get<any>(this.apiUrl);
  }

  getComments(cnt?: number | 100) {
    return this.http.get(this.apiUrl);
  }
}
