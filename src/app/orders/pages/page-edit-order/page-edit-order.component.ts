import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../service/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss'],
})
export class PageEditOrderComponent {
  /**
   Extraire l'id de l'url avec ActivatedRoute
   A partir de l'id, rechercher l'obj dans la bdd
   si obj, alors, on le stocke et on le passe à app-form-order
   */

  public item!: Order;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ordersService: OrdersService,
    private router: Router
  ) {
    // type string ou null
    const id: string | null = this.activatedRoute.snapshot.paramMap.get('id');
    // autre écriture, ce qui nous permet d'éviter l'utilisation du if(id)
    // const id = this.activatedRoute.snapshot.paramMap.get('id')!;

    // vérifier le type de id
    console.log(typeof id); // number ???

    if (id) {
      this.ordersService.getItemById(id).subscribe((data) => {
        // console.log(data);
        this.item = data;
      });
    }
    // déclencher la méthode
  }

  public onEdit(obj: Order) {
    //appeler le service
    this.ordersService.update(obj).subscribe((data) => {
      console.log(data, 'modifié');
      this.router.navigate(['']);
    });
  }
}
