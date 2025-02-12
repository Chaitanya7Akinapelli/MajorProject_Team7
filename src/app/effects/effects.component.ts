import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-effects',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './effects.component.html',
  styleUrls: ['./effects.component.css']
})
export class EffectsComponent {
  effects = [
    {
      title: 'Reduced Oxygen Levels',
      description: `
        Lung diseases can impair the lungs' ability to deliver oxygen to the blood, resulting in hypoxemia. 
        This can cause dizziness, fatigue, and increased cardiovascular strain, especially during physical activity. 
        It directly impacts vital organs and overall physical endurance.
      `,
      isExpanded: false
    },
    {
      title: 'Breathing Difficulties',
      description: `
        Chronic breathlessness, wheezing, and chest tightness occur due to inflammation or obstruction in the airways. 
        These symptoms make routine activities like walking or climbing stairs difficult and may also cause disrupted sleep.
      `,
      isExpanded: false
    },
    {
      title: 'Weakened Immune System',
      description: `
        Chronic lung conditions weaken the immune system, increasing the likelihood of infections like pneumonia or bronchitis. 
        Such infections exacerbate symptoms and prolong recovery times, causing significant health complications.
      `,
      isExpanded: false
    },
    {
      title: 'Fatigue and Weakness',
      description: `
        Persistent fatigue occurs due to reduced oxygen supply to muscles and organs. This limits the ability to perform daily tasks 
        and often leads to emotional exhaustion and inactivity, compounding physical health issues.
      `,
      isExpanded: false
    },
    {
      title: 'Pulmonary Hypertension',
      description: `
        Lung diseases can lead to pulmonary hypertension, a condition where high blood pressure develops in the arteries between 
        the heart and lungs. This increases strain on the heart, potentially causing heart failure and reduced exercise tolerance.
      `,
      isExpanded: false
    },
    {
      title: 'Chest Pain or Discomfort',
      description: `
        Inflammation or scarring of lung tissue can cause chest pain, especially during deep breaths. This symptom often discourages 
        proper breathing, reducing oxygen intake and contributing to anxiety.
      `,
      isExpanded: false
    }
  ];

  toggleEffect(effect: any) {
    effect.isExpanded = !effect.isExpanded;
  }
}
