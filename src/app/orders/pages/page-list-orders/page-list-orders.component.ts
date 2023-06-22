import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  // tableau pour lister tous les noms des colonnes
  public headers: string[] = [
    'Action',
    'Type',
    'Client',
    'Nb Jours',
    'Tjm Ht',
    'Total HT',
    'Total TTC',
    'Etat',
  ];

  // créer une propriete qui va stocker data
  public tab!: Order[]; // undefined

  // accéder au service = injection de dépendances
  constructor(private ordersService: OrdersService, private router: Router) {
    // console.log(this.ordersService.sumUp(1, 2));

    // utilisation de rxjs
    this.ordersService.getDatas().subscribe((data) => {
      // console.log(data);
      // stocker data dans propriété locale
      this.tab = data;
      //console.log(this.tab);// [Order]

      // afficher dans html avec une boucle
    });

    //  console.log(this.tab);// undefined
  }

  // remplacé par un pipe
  public total(val: number, coef: number, tva?: number) {
    console.log('déclenché'); // ??? 3 fois ?

    // attention à cause du Change Detection, les méthodes sont plusieurs fois
    // utilisation d'un Pipe |

    if (tva) return val * coef * (1 + tva / 100);
    return val * coef;
  }

  public goToEdit(id: number) {
    console.log(id, 'id de obj cliqué');
    // redirection vers une nouvelle page
    this.router.navigate(['edit', id]);
  }
}
