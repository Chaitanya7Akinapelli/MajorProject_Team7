import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { LungDiseasesComponent } from "../lung-diseases/lung-diseases.component";
import { TechnologiesComponent } from "../technologies/technologies.component";
import { FileUploadComponent } from "../file-upload/file-upload.component";
import { EffectsComponent } from "../effects/effects.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, LungDiseasesComponent, TechnologiesComponent, FileUploadComponent, EffectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
