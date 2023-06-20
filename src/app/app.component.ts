import { Component } from '@angular/core';

// META DONNEES = INFORMATIONS SUR LE COMPOSANT
// DECORATOR
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
// FIN DU DECORATOR
export class AppComponent {
  public title = 'crm';

  public open: boolean = false;

  public onClick() {
    // console.log('cliqué');
    this.open = !this.open;
    console.log(this.open);

  }

} // NE RIEN ECRIRE APRES CETTE LIGNE
