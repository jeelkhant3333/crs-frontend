import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private formBuilder: FormBuilder) { }

  isInValid: boolean = false

  registerForm: FormGroup = this.formBuilder.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  submitForm(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    } else {
      this.isInValid = true
      console.log('invalid');

    }
  }

}
