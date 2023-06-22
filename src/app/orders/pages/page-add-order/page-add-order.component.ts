import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../service/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss'],
})
export class PageAddOrderComponent {
  // créer un new Order()
  public item: Order = new Order();

  // ici on injecte Router pour gérer la redirection
  constructor(private ordersService: OrdersService, private router: Router) {}

  public onAdd(obj: Order) {
    console.log(obj, 'depuis le parent');
    // APPEL VERS LE SERVEUR
    this.ordersService.add(obj).subscribe((data) => {
      console.log(data, 'envoyé');

      // redirection part1/part2
      // redirection vers la page d'accueil avec ['']
      this.router.navigate(['']);
    });
  }
}
