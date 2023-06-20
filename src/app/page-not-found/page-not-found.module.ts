import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';


// ici on ajoute l'import du fichier de routing
@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    PageNotFoundRoutingModule,
    CommonModule
  ]
})
export class PageNotFoundModule { }
