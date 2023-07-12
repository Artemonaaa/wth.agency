import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable, tap } from 'rxjs'

import { IProduct, IBreeds } from '../models/product'

@Injectable({
  providedIn: 'root',
})

export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts(productCount: number, breedName: string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`https://api.thecatapi.com/v1/images/search`, {
      params: new HttpParams({
        fromObject: { 
          limit: productCount,
          breed_ids: breedName,
         },
      }),
      headers: {
        ['x-api-key']: 'live_eDP71uvyJg8I1nnjYCoqEUbJLyncDrehifToQJYqVpiU10lSFZ6NMscAMgkghqNo',
      },
    }).pipe(tap(x => console.log(x)))
  };

  getBreeds(): Observable<IBreeds[]> {
    return this.http.get<IBreeds[]>('https://api.thecatapi.com/v1/breeds')
  }

}