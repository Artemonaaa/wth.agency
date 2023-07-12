import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductService } from '../../services/products.services';
import { IBreeds } from 'src/app/models/product';


@Component({
  selector: 'app-product-header',
  templateUrl: 'product-header.component.html',

})
export class ProductHeaderComponent implements OnInit {
  @Input() breedName: string
  @Input() itemCount: number

  @Output() itemsCountChange = new EventEmitter<number>()
  @Output() breedNameChange = new EventEmitter<string>()

  constructor(private productsService: ProductService) {}

  breeds$: Observable<IBreeds[]>

  ngOnInit(): void {
    this.breeds$ = this.productsService.getBreeds()
  }

  onBreedNameUpdate(newBreedName: string): void {
    this.breedNameChange.emit(newBreedName)
  }

  onItemsUpdate(count: number): void {
    this.itemsCountChange.emit(count)
  }
}
