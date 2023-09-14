import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ListaJogadoresService } from './lista-jogadores.service';
import { Jogadores } from '../jogadores';
import { Observable, catchError, empty, map, take, tap } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from '../shared/alert-modal/alert-modal.component';
import { SelecaoJogadoresComponent } from './modal/selecao-jogadores/selecao-jogadores.component';
import { ActivatedRoute, Router } from '@angular/router';
import { DadosApp } from '../shared/dados/dados-app-static';
import { ObservableListaJogadores } from '../shared/dados/ObservableListaJogadores';

@Component({
  selector: 'app-lista-jogadores',
  templateUrl: './lista-jogadores.component.html',
  styleUrls: ['./lista-jogadores.component.css']
})
export class ListaJogadoresComponent implements OnInit {

  //listaJogadores: Jogadores[] = [];

  @Input() listaJogadores$?: Observable<Jogadores[]>;

  @ViewChild('deleteModal') deleteModal: any;

  bsModalRef?: BsModalRef;

  deleteModalRef?: BsModalRef;

  jogadorSelecionado?: Jogadores;

  placar: any[] = []

  constructor(
    private service: ListaJogadoresService,
    private modalService: BsModalService,
    private router: Router,
    private route: ActivatedRoute,
    private observableListaJogadores: ObservableListaJogadores
  ) {
    this.onRefresh();
   }

  ngOnInit() {

    console.log("INIT", this.placar);

    this.placar.map(p => {
      console.log("P ", p);

    })

    //this.onRefresh();

    //this.service.list().subscribe(dados => this.listaJogadores = dados);
    /*this.listaJogadores$ = this.service.list().pipe(
      //take(1)
      catchError(error => {
        console.log("Error ", error);
        this.handleError('danger', error.message)
        return [];
      })
    );*/
  }

  onRefresh() {

    this.listaJogadores$ = this.service.list().pipe(
      tap(res => {
        console.log("Res 88 ", res);

        res.map(jogador => {
          console.log("Jogador ", jogador);

          jogador.gatosNoite.map(gato => {
            this.placar.push(gato);
          })

        })

        let count = 0;
        /*res.map(jogador => {
          this.placar.map(pl => {
            if(jogador._id == pl._id){
              jogador.count +=
              count++
            }
          })
        })*/
        console.log("Pl count", count);


      }),
      //take(1)
      catchError(error => {
        console.log("Error ", error);
        this.handleError('danger', error.message)
        return [];
      })
    );

    console.log("On refresh ", this.placar);


  }

  handleError(type: string, message: string) {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = type;
    this.bsModalRef.content.message = message;
    this.bsModalRef.content.closeBtnName = 'Close';

  }

  onSelectPlayers() {

    this.listaJogadores$?.subscribe(res => {
      console.log("Res 1", res)
      this.observableListaJogadores.setConexao(res);

      console.log("Modal");
      this.bsModalRef = this.modalService.show(SelecaoJogadoresComponent, Object.assign({}, { class: 'modal-md' }));
    })

    //this.bsModalRef. = "this.listaJogadores$"
  }

  OnEdit(jogador: Jogadores) {
    this.router.navigate(['/editar-jogador/', jogador._id], { relativeTo: this.route })
  }

  onDelete(jogador: Jogadores) {
    console.log(typeof jogador._id);

    this.jogadorSelecionado = jogador;

    this.deleteModalRef = this.modalService.show(this.deleteModal, { class: 'modal-md' })

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
