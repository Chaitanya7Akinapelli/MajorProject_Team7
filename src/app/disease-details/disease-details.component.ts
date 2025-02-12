import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disease-details',
  standalone:true,
  imports:[NgIf,NgFor],
  templateUrl: './disease-details.component.html',
  styleUrls: ['./disease-details.component.css'],
})
export class DiseaseDetailsComponent implements OnInit {
  disease: any;

  diseases = [
    {
      id: 1,
      img: './assets/covid_image.jpg',
      name: 'Corona Virus',
      description: `(COVID-19) COVID-19 is an infectious disease caused by the SARS-CoV-2 virus, which primarily targets the 
          respiratory system. It has caused a global pandemic, affecting millions worldwide. The virus spreads through respiratory 
          droplets and close contact, making it highly contagious. Common symptoms include fever, dry cough, and fatigue, while severe 
          cases can lead to pneumonia, lung damage, and multi-organ failure. Preventive measures such as vaccination, wearing masks, 
          and maintaining hygiene are crucial in controlling its spread.`,
      deeplearningrole: `Deep learning techniques, like convolutional neural networks, play a supportive role in identifying 
          COVID-19-related abnormalities in chest X-ray images, enabling faster diagnosis. These AI models assist healthcare 
          professionals by flagging potential cases for further evaluation.`,
      subimages: {img1 : './assets/covid-19/img1.png' , img2 : './assets/covid-19/img2.png' , img3 : './assets/covid-19/img3.png' , img4 : './assets/covid-19/img4.png'}
    },
    {
      id: 2,
      img: './assets/bacterial_pneumonia.jpg',
      name: 'Pneumonia',
      description: `Pneumonia is an infection that inflames the air sacs in one or both lungs, which can be caused by bacteria, 
          viruses, or fungi. The infection leads to symptoms such as chest pain, cough with phlegm, fever, and difficulty breathing. 
          Severe cases may require hospitalization, particularly for those with weakened immune systems or preexisting health conditions. 
          Antibiotics or antiviral medications are typically used for treatment, depending on the cause.`,
      deeplearningrole: `Deep learning models can help identify patterns of pneumonia in chest X-rays by analyzing opacities 
          or abnormalities in lung regions. These models support rapid and accurate diagnosis, enabling timely medical intervention.`,
        subimages: {img1 : './assets/Pneumonia/img1.jpeg' , img2 : './assets/Pneumonia/img2.jpeg' , img3 : './assets/Pneumonia/img3.jpeg' , img4 : './assets/Pneumonia/img4.jpeg'}
    },
    {
      id: 3,
      img: './assets/Tuberculosis.jpeg',
      name: 'Tuberculosis',
      description: `Tuberculosis (TB) is a bacterial infection caused by Mycobacterium tuberculosis, primarily affecting the lungs. 
          It spreads through airborne particles when an infected person coughs or sneezes. Symptoms include persistent cough, 
          chest pain, weight loss, fever, and night sweats. TB is a serious condition but treatable with a prolonged course of 
          antibiotics. Early detection and adherence to medication are vital for recovery and preventing spread.`,
      deeplearningrole: `Deep learning technologies assist in detecting TB in chest X-rays by recognizing unique patterns 
          caused by the infection. These AI tools help healthcare professionals confirm diagnoses and monitor treatment progress.`,
      subimages: {img1 : './assets/TuberCulosis/img1.jpg' , img2 : './assets/TuberCulosis/img2.jpg' , img3 : './assets/TuberCulosis/img3.jpg' , img4 : './assets/TuberCulosis/img4.jpg'}
    },
    {
      id: 4,
      img: './assets/lung-opacity.avif',
      name: 'Lung Opacity',
      description: `Lung opacity refers to areas of increased density in the lungs visible on X-rays or CT scans. These opacities 
          can indicate various conditions, such as infections, inflammation, or tumors. The causes vary widely and require further 
          tests for proper diagnosis. Symptoms depend on the underlying cause and may include shortness of breath, cough, or chest pain.`,
      deeplearningrole: `Deep learning models play a crucial role in analyzing lung opacities by detecting subtle abnormalities 
          in imaging data. These models assist in narrowing down potential causes and supporting clinical decision-making.`,
      subimages: {img1 : './assets/covid-19/img1.png' , img2 : './assets/covid-19/img2.png' , img3 : './assets/covid-19/img3.png' , img4 : './assets/covid-19/img4.png'}
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.disease = this.diseases.find((d) => d.id === id);
  }

  getSubimages(subimages: { [key: string]: string }): string[] {
    return Object.values(subimages);
  }
  
}
