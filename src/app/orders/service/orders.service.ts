import { Injectable } from '@angular/core';

// DECORATOR
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor() {}

  // créer des méthodes

  public sumUp(a: number, b: number): number {
    return a + b;
  }

  // méthode GET

  // méthode POST

  // méthode PUT
}
