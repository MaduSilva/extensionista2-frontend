import { Component, ViewChild  } from '@angular/core';

@Component({
  selector: 'preCadastro',
  templateUrl: './preRegistration.component.html',
  styleUrls: ['./preRegistration.component.css']
})
export class preRegistrationComponent {
  @ViewChild('myForm') form: any;
  nomeCompleto: string = '';
  email: string = '';
  telefoneCelular: string = '';
  cep: string = '';
  comoConheceu: string = 'Instagram';
  nomeAmigo: string = '';
  necessidade: string = '';
  
  comoConheceuOpcoes = ['Instagram', 'Facebook', 'Google', 'Amigo ou Parente'];

  onSubmit(myForm: any) {
    let mensagem = "Nome completo: " + this.nomeCompleto +
                "\nE-mail: " + this.email +
                "\nTelefone: " + this.telefoneCelular +
                "\nCEP: " + this.cep +
                "\nComo conheceu o projeto: " + this.comoConheceu;
  
  if (this.comoConheceu === 'Amigo ou Parente') {
    mensagem += "\nAmigo ou parente: " + this.nomeAmigo;
  }
  
  mensagem += "\nMensagem: " + this.necessidade;
  
  alert(mensagem);
  this.form.reset();
  }
}
