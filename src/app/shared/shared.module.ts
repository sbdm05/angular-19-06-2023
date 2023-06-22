import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconCloseComponent } from './components/icon-close/icon-close.component';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';
import { TotalPipe } from './pipes/total.pipe';
import { BtnComponent } from './components/btn/btn.component';
import { RouterModule } from '@angular/router';


// FICHE D'IDENTITE DU MODULE

@NgModule({
  declarations: [
    IconCloseComponent,
    IconNavComponent,
    TotalPipe,
    BtnComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    IconCloseComponent,
    IconNavComponent,
    TotalPipe,
    BtnComponent
  ]
})
export class SharedModule { }
