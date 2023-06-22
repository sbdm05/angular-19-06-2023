import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

// DECORATOR
@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent {
  // propriété qui stocke l'enum
  public stateOrder = Object.values(StateOrder);

  // 1 - on nomme le formulaire
  public form!: FormGroup;

  // Récupérer l'objet envoyé par PageAddOrder
  @Input() init!: Order;

  // Créer une propriété disponible pour le parent
  @Output() submitted = new EventEmitter();

  constructor(private fb: FormBuilder) {
    // console.log(this.init, 'depuis constructor');
  }

  ngOnInit() {
    console.log(this.init, 'depuis onInit');
    // 2 - créer un objet et lui associer des validations de formulaire
    this.form = this.fb.group({
      tjmHt: [this.init.tjmHt],
      nbJours: [this.init.nbJours],
      tva: [this.init.tva],
      state: [this.init.state],
      typePresta: [this.init.typePresta],
      client: [this.init.client],
      comment: [this.init.comment],
      id: [this.init.id],
    });
  }

  public onSubmit() {
    // console.log('validé');
    console.log(this.form.value);
    // objectif: envoyer this.form.value au composant parent
    // c'est le composant parent qui va faire l'insert (POST)
    this.submitted.emit(this.form.value);
  }
}
