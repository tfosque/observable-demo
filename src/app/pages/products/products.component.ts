import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartStoreService } from 'src/app/services/cart-store.service';
import { ProductStoreService } from 'src/app/services/product-store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @Output() userSelections = new EventEmitter();
  products$: any = new BehaviorSubject<any>([]);

  constructor(private readonly productStore: ProductStoreService) {}

  ngOnInit(): void {
    this.productStore.getProducts();
    this.productStore.products$.pipe().subscribe((fromProductComponent) => {
      this.products$.next(fromProductComponent);
      console.log({ fromProductComponent });
    });
  }
}
