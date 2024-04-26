import { Hero } from '../models/hero';
import { Component } from '@angular/core';
import { Form } from '@angular/forms';


@Component({
  selector: 'app-comp-cap-9-template-driven-form',
  templateUrl: './comp-cap-9-template-driven-form.component.html',
  styleUrl: '../app.component.css'
})
export class CompCap9TemplateDrivenFormComponent {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Hero(42, '', '');
  }
}
