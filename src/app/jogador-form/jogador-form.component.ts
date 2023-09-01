import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ListaJogadoresService } from '../lista-jogadores/lista-jogadores.service';
import { Jogadores } from '../jogadores';
import { formatCurrency } from '@angular/common';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from '../shared/alert-modal/alert-modal.component';

@Component({
  templateUrl: './jogador-form.component.html',
  styleUrls: ['./jogador-form.component.css']
})
export class JogadorFormComponent implements OnInit{

  form = new FormGroup({
    nome: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    apelido: new FormControl(null, [Validators.required, Validators.maxLength(20)])
  });

  submitted: boolean = false;
  bsModalRef?: BsModalRef;

  constructor(private fb: FormBuilder, private service: ListaJogadoresService, private modalService: BsModalService) { }

  ngOnInit(): void {

    /*this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      apelido: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]]
    });*/
  }

  handleError() {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = 'Error ';
  }

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }

  onSubmit(): void {
    this.submitted = true;
    console.log("Aqui ", this.form.get('nome')?.value);
    if(this.form.valid){


      let jogador: Jogadores = {
        nome: this.form.get('nome')?.value || '',
        apelido: this.form.get('apelido')?.value || '',
        gatosNoite: [],
        gatosRodada: []
      }

      console.log(jogador);
      this.service.create(jogador).subscribe(
        success => {
          console.log('sucesso ', success)},
        error => console.error(error),
        () => console.log('request completo')
      );

    }

  }

  onCancel() {

  }
}
