import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';;
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(private formBuilder: FormBuilder,) { }

  isInValid:boolean = false

  loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })


  submitForm(): void {
    if (this.loginForm.valid) {
    console.log(this.loginForm.value);
  }else{
    this.isInValid = true
    console.log('invalid');
    
  }
  }
}


