import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconCloseComponent } from './components/icon-close/icon-close.component';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';
import { TotalPipe } from './pipes/total.pipe';


// FICHE D'IDENTITE DU MODULE

@NgModule({
  declarations: [
    IconCloseComponent,
    IconNavComponent,
    TotalPipe
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    IconCloseComponent,
    IconNavComponent,
    TotalPipe
  ]
})
export class SharedModule { }
