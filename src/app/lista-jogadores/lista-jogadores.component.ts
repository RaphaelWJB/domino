import { Component, Input, OnInit } from '@angular/core';
import { ListaJogadoresService } from './lista-jogadores.service';
import { Jogadores } from '../jogadores';
import { Observable, catchError, empty, take } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from '../shared/alert-modal/alert-modal.component';
import { SelecaoJogadoresComponent } from './modal/selecao-jogadores/selecao-jogadores.component';

@Component({
  selector: 'app-lista-jogadores',
  templateUrl: './lista-jogadores.component.html',
  styleUrls: ['./lista-jogadores.component.css']
})
export class ListaJogadoresComponent implements OnInit{

  //listaJogadores: Jogadores[] = [];

  @Input() listaJogadores$?: Observable<Jogadores[]>;

  bsModalRef?: BsModalRef;

  constructor(
    private service: ListaJogadoresService,
    private modalService: BsModalService
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

}
