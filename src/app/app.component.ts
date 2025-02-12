import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileUploadComponent } from "./file-upload/file-upload.component";
import { HttpClientModule } from '@angular/common/http';
import { ImageUploadService } from './image-upload.service';
import { NavabarComponent } from "./navabar/navabar.component";
import { AboutComponent } from "./about/about.component";
import { LungDiseasesComponent } from "./lung-diseases/lung-diseases.component";
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, NavabarComponent,HomeComponent],
  providers: [ImageUploadService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'flask-angular-integration';
}
