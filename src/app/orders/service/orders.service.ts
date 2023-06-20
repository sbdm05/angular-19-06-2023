import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';

// DECORATOR
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  // créer des méthodes
  public sumUp(a: number, b: number): number {
    return a + b;
  }

  // méthode GET
  public getDatas(): Observable<Order[]> {
    return this.http.get<Order[]>('http://localhost:3004/orders');
  }

  // new Observable({
    // fetch sur API
    // transformer json en js
    // return le js
  // })

  // méthode POST

  // méthode PUT
}
