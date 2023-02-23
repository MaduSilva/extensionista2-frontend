import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Login } from 'src/app/models/login.model';
import { Usuario } from 'src/app/models/usuario.model';

const LS_KEY: string = 'usuarioLogado';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  public get usuarioLogado(): Usuario {
    let user = localStorage[LS_KEY];
    return (user ? JSON.parse(localStorage[LS_KEY]) : null);
  }

  public set usuarioLogado(usuario: Usuario){
    localStorage[LS_KEY] = JSON.stringify(usuario);
  }

  logout(){
    delete localStorage[LS_KEY];
  }

  login(login: Login) : Observable<Usuario | null> {
    let user = new Usuario(1, "Madu-Contemplado", login.login, login.senha, "CONTEMPLADO");
    if(login.login == login.senha){
      if (login.login == "admin"){
        user = new Usuario(1, "Madu-Admin", login.login, login.senha, "ADMIN")
      }
      return of (user);
    }
    else {
      return of(null);
    }
  }
}
