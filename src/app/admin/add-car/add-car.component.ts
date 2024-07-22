import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-add-car',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.css'
})
export class AddCarComponent {

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  imageSrc: (string | ArrayBuffer)[] = [];


  onFileSelected(event: Event) {
    const files = (event.target as HTMLInputElement).files;

    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result;
          if (result) {
            this.imageSrc = [...this.imageSrc, result as string | ArrayBuffer];
          }
        };
        reader.readAsDataURL(file);
      }
    }
  }


}
