import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ListaJogadoresService } from './lista-jogadores.service';
import { Jogadores } from '../jogadores';
import { Observable, catchError, empty, take } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from '../shared/alert-modal/alert-modal.component';
import { SelecaoJogadoresComponent } from './modal/selecao-jogadores/selecao-jogadores.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-jogadores',
  templateUrl: './lista-jogadores.component.html',
  styleUrls: ['./lista-jogadores.component.css']
})
export class ListaJogadoresComponent implements OnInit{

  //listaJogadores: Jogadores[] = [];

  @Input() listaJogadores$?: Observable<Jogadores[]>;

  @ViewChild('deleteModal') deleteModal: any;

  bsModalRef?: BsModalRef;

  deleteModalRef?: BsModalRef;

  jogadorSelecionado?: Jogadores;

  constructor(
    private service: ListaJogadoresService,
    private modalService: BsModalService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){

    //this.service.list().subscribe(dados => this.listaJogadores = dados);
    this.listaJogadores$ = this.service.list().pipe(
      //take(1)
      catchError(error => {
        console.log("Error ", error);
        this.handleError('danger', error.message)
        return [];
      })
    );
  }

  onRefresh() {
    this.listaJogadores$ = this.service.list().pipe(
      //take(1)
      catchError(error => {
        console.log("Error ", error);
        this.handleError('danger', error.message)
        return [];
      })
    );
  }

  handleError(type: string, message: string) {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = type;
    this.bsModalRef.content.message = message;
    this.bsModalRef.content.closeBtnName = 'Close';

  }

  onSelectPlayers() {
    console.log("Modal");

    this.bsModalRef = this.modalService.show(SelecaoJogadoresComponent, Object.assign({}, { class: 'red modal-lg' }));
  }

  OnEdit(jogador: Jogadores) {
    this.router.navigate(['/editar-jogador/', jogador._id], { relativeTo: this.route})
  }

  onDelete(jogador: Jogadores) {
    console.log(typeof jogador._id);

    this.jogadorSelecionado = jogador;

    this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-md'})

  }

  onConfirmeDelete() {

    this.service.delete(this.jogadorSelecionado?._id!).subscribe(
      success => {
        console.log(success);
        this.deleteModalRef?.hide();
        this.onRefresh()
      }, error => {
        this.handleError('danger', error.message)
      }
    );

  }

  onDeclineDelete() {
    this.deleteModalRef?.hide();
  }
}
