import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-selected-products-group',
  templateUrl: './selected-products-group.component.html',
  styleUrls: ['./selected-products-group.component.scss'],
})
export class SelectedProductsGroupComponent implements OnInit {
  @Input() selections = new BehaviorSubject<any>([]);
  constructor() {}

  ngOnInit(): void {}

  removeSelection(product: any) {}
}
