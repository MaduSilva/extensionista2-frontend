import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) { }

  redirectToPreRegistration() {
    this.router.navigate(['preCadastro']);
  }

  redirectToDonor() {
    this.router.navigate(['doador']);
  }
  
}
