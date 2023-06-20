import { Component } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../service/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent {

  // pour afficher cette propriété dans l'html, vous utilisez
  // les {{ title }} = string interpolation

  public title: string = 'Liste des Orders';


  // créer une propriete qui va stocker data
  public tab!: Order[]; // undefined

  // accéder au service = injection de dépendances
  constructor(private ordersService: OrdersService) {
    // console.log(this.ordersService.sumUp(1, 2));

    // utilisation de rxjs
    this.ordersService.getDatas().subscribe((data) => {
      // console.log(data);
      // stocker data dans propriété locale
      this.tab = data;
      console.log(this.tab);// [Order]

      // afficher dans html avec une boucle
    });

    //  console.log(this.tab);// undefined
  }
}
