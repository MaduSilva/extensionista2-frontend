import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';
import { Usuario } from 'src/app/models/usuario.model';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  redirectHome() {
    this.router.navigate(['']);
  }

  constructor(
    private router: Router,
    private loginService: LoginService
  ){}

  get usuarioLogado(): Usuario | null {
    return this.loginService.usuarioLogado;
  }

  logout(){
    this.loginService.logout();
    this.router.navigate(['/login'])
  }
}
