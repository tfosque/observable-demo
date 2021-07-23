import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedProductsGroupComponent } from './selected-products-group.component';

describe('SelectedProductsGroupComponent', () => {
  let component: SelectedProductsGroupComponent;
  let fixture: ComponentFixture<SelectedProductsGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedProductsGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedProductsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
