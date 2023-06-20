import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  // SI l'UTILISATEUR EST SUR LA ROUTE ** alors affiche le
  // composant PageNotFoundComponent

  // nomdedomaine/**
  {path: '', component: PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageNotFoundRoutingModule {}
