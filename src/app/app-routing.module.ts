import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddOrderComponent } from './orders/pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './orders/pages/page-edit-order/page-edit-order.component';
import { PageListOrdersComponent } from './orders/pages/page-list-orders/page-list-orders.component';

const routes: Routes = [
  // chemin vide nomdeDomaine.fr/
  { path: '', component: PageListOrdersComponent },
  { path: 'add', component: PageAddOrderComponent },
  { path: 'edit', component: PageEditOrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
