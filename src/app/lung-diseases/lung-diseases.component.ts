import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lung-diseases',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './lung-diseases.component.html',
  styleUrl: './lung-diseases.component.css'
})
export class LungDiseasesComponent {
  diseases = [
    { id: 1, name: 'Corona Virus', imagePath: './assets/covid_image.jpg' },
    { id: 2, name: 'Pneumonia', imagePath: './assets/bacterial_pneumonia.jpg' },
    { id: 3, name: 'Tuberculosis', imagePath: './assets/Tuberculosis.jpeg' },
    { id: 4, name: 'Lung Opacity', imagePath: './assets/lung-opacity.avif' },
  ];
  
  constructor(private router: Router) {}
    goToDetails(id: number)
    {
        this.router.navigate([`/disease/${id}`]);
    }
}
