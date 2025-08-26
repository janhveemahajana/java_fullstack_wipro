import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  fName = new FormControl('');
  reversedValue = '';

  constructor() {
    this.fName.valueChanges.subscribe((value) => {
      this.reversedValue = value ? value.split('').reverse().join('') : '';
    });
  }
}
