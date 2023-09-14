import { Component, Input, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Jogadores } from 'src/app/jogadores';
import { DadosApp } from 'src/app/shared/dados/dados-app-static';
import { ObservableListaJogadores } from '../../../shared/dados/ObservableListaJogadores';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selecao-jogadores',
  templateUrl: './selecao-jogadores.component.html',
  styleUrls: ['./selecao-jogadores.component.scss']
})
export class SelecaoJogadoresComponent implements OnInit {

  listaJogadores: {
    _id?: string;
    nome: string | null;
    apelido: string;
    gatosNoite: {
      _id?: string;
      nome: string;
    }[];
    gatosRodada: {
      _id: string;
      nome: string;
    }[];
    selecionado: boolean;
    totalGatos: number
  }[] = new Array();

  selecionado: boolean = false;

  constructor(
    public bsModalRef: BsModalRef,
    public observableListaJogadores: ObservableListaJogadores,
    public router: Router
  ) {


  }
  ngOnInit(): void {
    //this.observableListaJogadores.getConexao().map(jogador => console.log(jogador));
    let array = new Array();
    this.observableListaJogadores.getConexao().subscribe(res => {
      res.map(result => {

        let jogador = {
          _id: result._id,
          nome: result.nome,
          apelido: result.apelido,
          gatosNoite: result.gatosNoite,
          gatosRodada: result.gatosRodada,
          selecionado: true,
          totalGatos: result.totalGatos
        }

        console.log(jogador);

        //array.push(jogador)

        this.listaJogadores.push(jogador)
      })
    });


    //this.observableListaJogadores.getObservable().subscribe(tes => console.log(tes));

  }

  onCloseModal() {
    this.bsModalRef.hide();
  }

  onClick() {
    console.log("Selecionado ", this.listaJogadores);

  }

  prosseguir() {

    const listaSelecionados = this.listaJogadores.filter(obj => obj.selecionado)

    this.observableListaJogadores.setJogadoresNoite(listaSelecionados);
    this.router.navigate(['jogo-noite'])
    this.bsModalRef.hide()

  }

}
