import { Component } from '@angular/core';
//utiliser une variable de fontAwesome
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-close',
  templateUrl: './icon-close.component.html',
  styleUrls: ['./icon-close.component.scss']
})
export class IconCloseComponent {
  // 2 - stocker faTimes dans propriété
  public iconValue = faTimes;

}
