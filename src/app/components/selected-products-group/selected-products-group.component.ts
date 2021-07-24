import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductStoreService } from 'src/app/services/product-store.service';

@Component({
  selector: 'app-selected-products-group',
  templateUrl: './selected-products-group.component.html',
  styleUrls: ['./selected-products-group.component.scss'],
})
export class SelectedProductsGroupComponent implements OnInit {
  @Input() selections = new BehaviorSubject<any>([]);

  constructor(private readonly productStore: ProductStoreService) {}

  ngOnInit(): void {}

  removeSelection(product: any) {
    this.productStore.removeSelections(product);
    // console.log('remove', { product });
  }
}
