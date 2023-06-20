import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // SI l'UTILISATEUR EST SUR LA ROUTE /orders alors affiche le
  // composant PageOrdersListComponent

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
