import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-car',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,],
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.css'
})
export class AddCarComponent {

  constructor(private formBuilder: FormBuilder) { }

  carData: any = {
    bodyType: '',
    color: '',
    company: '',
    description: '',
    fuelType: '',
    mileage: null,
    model: '',
    name: '',
    price: null,
    topSpeed: null,
    transmission: '',
    images: ['']
  };

  isInValid: boolean = false

  addCarForm: FormGroup = this.formBuilder.group(
    {
      img: [[''], Validators.required],
      company: ['', Validators.required],
      name: ['', Validators.required],
      color: ['', Validators.required],
      bodyType: ['', Validators.required],
      trnsmition: ['', Validators.required],
      model: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required,Validators.min(0)]],
      fuelType: ['', Validators.required],
      mileage: ['', [Validators.required,Validators.min(1)]],
      topSpeed: ['', [Validators.required, Validators.min(1)]],
    }
  )



  submitForm(): void {
    if (this.addCarForm.valid) {
      console.log(this.addCarForm.value);
    } else {
      this.isInValid = true

    }
  }

  resetForm(): void {
    this.addCarForm.reset();
    this.addCarForm.controls['img'].setValue([""]);
    this.isInValid = false;
    this.imageSrcs = [];
  }






  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  imageSrcs: (string | ArrayBuffer)[] = [];


  onFileSelected(event: any): void {
    const files = event.target.files;
    if (files.length === 0) return;

    const file = files[0];
    const reader = new FileReader();
    
    reader.onload = (e: any) => {
      this.imageSrcs.push(e.target.result);
      this.addCarForm.controls['img'].setValue(JSON.stringify(this.imageSrcs));
      console.log("helloooooooo", this.addCarForm.controls['img']);
    };

    reader.readAsDataURL(file);
  }



}
