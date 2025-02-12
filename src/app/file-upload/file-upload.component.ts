import { Component } from '@angular/core';
import { ImageUploadService } from '../image-upload.service';
import { HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [HttpClientModule,NgIf],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {
  constructor(private imageUploadService: ImageUploadService) {}

  selectedFile: File | null = null;
  previewUrl: string | null = null;
  message: string | null = null;

  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];

      // Preview the selected image
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }


  onUpload(): void {
    if (this.selectedFile) {
      this.imageUploadService.uploadImage(this.selectedFile).subscribe(
        (response) => {
          this.message = response.message;
        },
        (error) => {
          this.message = 'Error uploading image';
        }
      );
    } else {
      this.message = 'Please select a file first';
    }
  }
  
}
