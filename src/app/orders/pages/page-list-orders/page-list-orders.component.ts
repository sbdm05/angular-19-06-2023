import { Component } from '@angular/core';
import { OrdersService } from '../../service/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent {

  // accéder au service = injection de dépendances
  constructor(private ordersService: OrdersService) {
    console.log(this.ordersService.sumUp(1, 2));
  }
}
