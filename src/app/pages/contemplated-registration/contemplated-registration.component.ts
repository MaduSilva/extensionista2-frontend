import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contemplated-registration',
  templateUrl: './contemplated-registration.component.html',
  styleUrls: ['./contemplated-registration.component.css'],
})
export class ContemplatedRegistrationComponent implements OnInit {
  formulario!: FormGroup;
  previewUrl!: string;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastr: ToastrService
  ) {
    this.formulario = this.formBuilder.group({
    
      photo: [''],
      nome: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      rg: [null, [Validators.required, Validators.pattern(/^(\d{2}\.\d{3}\.\d{3}-\d{1}|(\d{8})([-]?)(\d{1}|X))?$/)]],
      cpf: [null, [Validators.required, Validators.pattern(/^(\d{3}\.?\d{3}\.?\d{3}-?\d{2})?$/)]],
      nascimento: [null, [Validators.required, Validators.pattern(/^(\d{2}\/\d{2}\/\d{4})?$/)]],
      estadoCivil: [null, [Validators.required]],
      escolaridade: [null, [Validators.required]],
      naturalidade: [null, [Validators.required, Validators.minLength(3)]],
      telefone: [null, [Validators.required,  Validators.minLength(8)]],
      religiao: [null, [Validators.required]],
      nomeReligiao: [null],
      postoDeSaude: [null],
      bolsaFamilia: [null, [Validators.required]],
      profissao: [null, [Validators.required, Validators.minLength(3)]],
      divida: [null, [Validators.required]],
      valorDivida: [null],
      renda: [null, [Validators.required]],
      convenio: [null, [Validators.required]],
      nomeConvenio: [null],
      comQuemMora: [null],
    

   
      cep: [null, [Validators.required, Validators.pattern(/^\d{5}-?\d{3}$/)]],
      rua: [null, [Validators.required, Validators.minLength(3)]],
      numero: [null, [Validators.required]],
      bairro: [null],
      complemento: [null],
    

      familiares: this.formBuilder.array([this.formBuilder.group({
        nomeFamiliar: [null],
        parentesco: [null],
        nascimentoFamiliar: [null],
        situacaoAtual: [null]
      })])
     
    });
  }

  ngOnInit() {
    

  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.formulario.get('photo')?.setValue(file);

    const reader = new FileReader();
    reader.onload = () => {
      this.previewUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onSubmit() {
    console.log(this.formulario.value);
    this.http
      .post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .pipe(map((data: any) => data))
      .subscribe({
        next: (data) => {
          console.log(data);
          this.showSuccess();
          this.reset();
        },
        error: (error: any) => this.showError(),
      });
  }

  reset() {
    this.formulario.reset();
    this.clearFamiliares();
  }

  clearFamiliares(): void {
    const familiares = this.formulario.get('familiares') as FormArray;
    familiares.clear();
  }

  addFamiliar(): void {
    const familiar = this.formBuilder.group({
      nomeFamiliar: [null],
      parentesco: [null],
      nascimentoFamiliar: [null],
      situacaoAtual: [null]
    }); 
    const familiares = this.formulario.get('familiares') as FormArray;
    familiares.push(familiar);
  }


  getFamiliares() {
    return (<FormArray>this.formulario.get('familiares')).controls;
  }  

  removeFamiliar(index: number): void {
    const familiares = this.formulario.get('familiares') as FormArray;
    familiares.removeAt(index);
  }
  
  showSuccess() {
    this.toastr.success('Cadastrado com sucesso!');
  }

  showError() {
    this.toastr.error('Erro! Tente novamente');
  }

  checkValidTouched(field: string) {
    return (
      !this.formulario.controls[field].valid &&
      this.formulario.controls[field].touched
    );
  }

  checkYesorNo(field: string){
    return (this.formulario.controls[field].value)
  }
}
