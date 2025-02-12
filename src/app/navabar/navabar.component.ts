import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navabar',
  standalone: true,
  imports: [],
  templateUrl: './navabar.component.html',
  styleUrl: './navabar.component.css'
})
export class NavabarComponent {
  constructor(private router: Router) {}
    goToHome()
    {
        this.router.navigate(['/about'])
    }
    goToFileUpload()
    {
        this.router.navigate(['/predictions'])
    }
    goToDiseases(){
      this.router.navigate(['diseases'])
    }
    goToTechnologies()
    {
      this.router.navigate(['technologies'])
    }
    goToEffects()
    {
      this.router.navigate(['effects'])
    }
}
