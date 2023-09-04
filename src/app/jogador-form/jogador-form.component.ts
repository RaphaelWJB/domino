import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ListaJogadoresService } from '../lista-jogadores/lista-jogadores.service';
import { Jogadores } from '../jogadores';
import { formatCurrency } from '@angular/common';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from '../shared/alert-modal/alert-modal.component';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';

@Component({
  templateUrl: './jogador-form.component.html',
  styleUrls: ['./jogador-form.component.css']
})
export class JogadorFormComponent implements OnInit {

  form = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    apelido: new FormControl('', [Validators.required])
  });

  submitted: boolean = false;
  bsModalRef?: BsModalRef;
  editar: boolean = false;
  jogador?: Jogadores

  constructor(private fb: FormBuilder, private service: ListaJogadoresService, private modalService: BsModalService, private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {

    if(this.route.snapshot.paramMap.get('id')){
      this.editar = true;
      this.route.params
      .pipe(
        map((params: any) => {
          console.log("Aqui");

          return params['id']
        }),
        switchMap( id => {
          console.log("Id ", id);

          return this.service.getOneById(id)

        })
      )
      .subscribe((jogador: Jogadores) => {
        this.jogador = jogador;
        this.updateForm(jogador)
      });

    }




    /*this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      apelido: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]]
    });*/
  }

  updateForm(jogador: Jogadores){
    this.form.patchValue({
      id: jogador._id,
      nome: jogador.nome,
      apelido: jogador.apelido
    })
  }

  getOneById(id: string){

    this.service.getOneById(id).subscribe(dados => console.log(dados));

  /*this.service.getOneById(id).pipe(
      //take(1)
    );*/
  }

  handleError(type: string, message: string) {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = type;
    this.bsModalRef.content.message = message;
    this.bsModalRef.content.closeBtnName = 'Close';

  }

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }

  onSubmit(): void {
    this.submitted = true;
    console.log("Aqui ", this.form.get('nome')?.value);
    console.log("Jogador ", this.jogador);

    if (this.form.valid) {



      if(this.editar){

        let jogador: Jogadores = {
          _id: this.jogador?._id,
          nome: this.form.get('nome')?.value || '',
          apelido: this.form.get('apelido')?.value || '',
          gatosNoite: this.jogador?.gatosNoite!,
          gatosRodada: this.jogador?.gatosRodada!,
        }

        console.log("Editar");
        jogador
        this.service.update(jogador).subscribe(
          success => {
            console.log('sucesso ', success)
            this.handleError('success', 'Usuário alterado com sucesso!')
            this.router.navigate(['/'])
          },
          error => console.error(error),
          () => console.log('request completo')
        );


      }else{

        let jogador: Jogadores = {
          nome: this.form.get('nome')?.value || '',
          apelido: this.form.get('apelido')?.value || '',
          gatosNoite: [],
          gatosRodada: []
        }

        this.service.create(jogador).subscribe(
          success => {
            console.log('sucesso ', success)

            this.handleError('success', 'Usuário cadastrado com sucesso!')
            this.router.navigate(['/'])
          },
          error => console.error(error),
          () => console.log('request completo')
        );
      }



    }

  }

  onCancel() {

  }
}
