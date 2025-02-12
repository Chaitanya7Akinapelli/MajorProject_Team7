import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DiseaseDetailsComponent } from './disease-details/disease-details.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AboutComponent } from './about/about.component';
import { LungDiseasesComponent } from './lung-diseases/lung-diseases.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { EffectsComponent } from './effects/effects.component';

export const routes: Routes = [
    {path : '' , component : HomeComponent},
    {path : 'disease/:id' , component : DiseaseDetailsComponent},
    {path : 'predictions' , component : FileUploadComponent},
    {path : 'about' , component : AboutComponent},
    {path : 'diseases' , component : LungDiseasesComponent},
    {path : 'technologies' , component : TechnologiesComponent},
    {path : 'effects' , component : EffectsComponent}
];
