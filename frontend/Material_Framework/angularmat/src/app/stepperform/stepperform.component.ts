import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-stepperform',
  imports: [ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule],
  templateUrl: './stepperform.component.html',
  styleUrl: './stepperform.component.css'
})
export class StepperformComponent {

  title = 'Vertical Stepper Form';

  nameGroup: FormGroup;
  ageGroup: FormGroup;
  emailGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.nameGroup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
    });

    this.ageGroup = this.fb.group({
      age: [null, [Validators.required, Validators.min(1), Validators.max(120)]],
    });

    this.emailGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get summary() {
    return {
      name: this.nameGroup.value.name,
      age: this.ageGroup.value.age,
      email: this.emailGroup.value.email,
    };
  }

  submit() {
    if (this.nameGroup.valid && this.ageGroup.valid && this.emailGroup.valid) {
      console.log('Form submitted:', this.summary);
      alert(`Submitted:\nName: ${this.summary.name}\nAge: ${this.summary.age}\nEmail: ${this.summary.email}`);
    }
  }

}
