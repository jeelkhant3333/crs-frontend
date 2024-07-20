import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';;
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-otp-verification',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,],
  templateUrl: './otp-verification.component.html',
  styleUrl: './otp-verification.component.css'
})
export class OtpVerificationComponent {

  isInValid:boolean = false

  constructor(private formBuilder:FormBuilder){}


  otpForm:FormGroup = this.formBuilder.group(
    {otp:["",[Validators.maxLength(6),Validators.minLength(6),Validators.required]]}
  )


}
