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
  // librairie rxjs
  public getDatas(): Observable<Order[]> {
    return this.http.get<Order[]>('http://localhost:3004/orders');
  }

  // new Observable({
    // fetch sur API
    // transformer json en js
    // return le js
  // })

  // méthode POST/ INSERT
  // dans PageAddOrder, on a => this.ordersService.add(obj).subscribe()
  public add(obj: Order): Observable<Order>{
    return this.http.post<Order>('http://localhost:3004/orders', obj);
  }

  // méthode getItemById altGr7 - utilisation des template strings
  public getItemById(id: string): Observable<Order>{
    console.log(id)
    return this.http.get<Order>(`http://localhost:3004/orders/${id}`);
  }

  // méthode PUT
  public update(obj: Order): Observable<Order>{
    return this.http.put<Order>(`http://localhost:3004/orders/${obj.id}`, obj);
  }



}
