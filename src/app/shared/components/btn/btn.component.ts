import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
})
export class BtnComponent {
  // on accède à la propriété envoyée par le parent
  @Input() label!: string;

  // ici on reçoit le style envoyé par le parent
  @Input() styleBtn!: string;

  // ici on reçoit la route
  @Input() routeInfo!: string;

  constructor() {
    // console.log(this.label); // undefined
    // console.log(this.styleBtn); // undefined
  }

  ngOnInit() {
    //console.log(this.label); // ??
    //console.log(this.styleBtn); // ??
  }

  ngOnChanges() {
    console.log(this.label); // ??
    console.log(this.styleBtn); // ??
  }

  // cycle de vie du composant
  // hooks

  ngOnDestroy() {
    console.log('détruit');
  }
}
