import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { ProductService } from './services/products.services';
import { IProduct } from './models/product'

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styles: []
})

export class AppComponent implements OnInit {
  constructor(private productsService: ProductService) {}

  loading = false
  products$: Observable<IProduct[]>
  breedName: string = ''
  itemsCount: number = 10

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(): void {
    this.loading = true
    this.products$ = this.productsService.getAllProducts(this.itemsCount, this.breedName).pipe(
      tap(() => this.loading = false)
    )
  }

  onItemsCountChange(newCount: number): void {
    this.itemsCount = newCount
    console.log(this.itemsCount)
    this.getProducts()
  }

  onBreedNameChange(newBreed: string): void {
    this.breedName = newBreed
    this.getProducts()
  }
}
