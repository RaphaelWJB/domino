import { Component, Input, OnInit } from '@angular/core';
import { ObservableListaJogadores } from '../shared/dados/ObservableListaJogadores';
import { Route, Router } from '@angular/router';
import { Jogadores, JogadoresPartida } from '../jogadores';
import { ListaJogadoresService } from '../lista-jogadores/lista-jogadores.service';

@Component({
  selector: 'app-jogo-noite',
  templateUrl: './jogo-noite.component.html',
  styleUrls: ['./jogo-noite.component.css']
})
export class JogoNoiteComponent implements OnInit {

  @Input() listaJogadores = new Array()

  listPartida = new Array()

  partidaIniciada: boolean = false

  constructor(private observable: ObservableListaJogadores, private router: Router, private service: ListaJogadoresService) {
    this.observable.getJogadoresNoite().subscribe(res => {
      this.listaJogadores = res
    })
  }

  ngOnInit(): void {
    console.log(this.listaJogadores);

    this.listaJogadores.map(res => {
      res.selecionado = true;
    })

  }

  montarTooltip(jogador: any){

let cont = [];
let total = 1;
for (let i = 0; i < jogador.gatosRodada.length; i++) {
    if (i < jogador.gatosRodada.length - 1 && jogador.gatosRodada[i].nome == jogador.gatosRodada[i + 1].nome) {
        total++;
    } else {
        cont.push({ nome: jogador.gatosRodada[i].nome, total: total });
        total = 1;
    }
}
//console.log(cont);
let txt = "";
cont.map((obj) => {
  console.log(obj);

      txt += obj.nome+obj.total+" | ";
    })

    //console.log("TXT ", txt);

    return txt;
  }

  onClick() {

  }

  iniciarPartida() {
    this.partidaIniciada = true
    this.listPartida = this.listaJogadores.filter(res => res.selecionado)
    //this.router.navigate(['/partida'])
  }

  finalizarpartida(jogadores: JogadoresPartida[]) {

    console.log("Jogadores ", jogadores);


    jogadores.map(jogador => {
      let contarGatosDados = 0;
      console.log("Jogador em questão ", jogador);

      jogadores.map(outrosJogadores => {

        if(outrosJogadores._id != jogador._id){
          console.log("Outros jogadores", outrosJogadores);
          outrosJogadores.gatosRodada.map(gatos => {
            if (gatos._id == jogador._id) {
              console.log("Total de Gatos dado ");
              contarGatosDados++;
            }
          });
        }

      })

      console.log(jogador.nome + " Tomou "+ jogador.gatosRodada.length + " Gatos.");

      jogador.totalGatos = (jogador.gatosRodada.length*-1 + contarGatosDados)


      console.log("Count Gatos dados "+ contarGatosDados + " do Jogador: " + jogador.nome);


      //jogador.totalGatos += 1;
      // if (jogador.gatosRodada.length > 0) {
      //   jogador.gatosRodada.map(gato => {
      //     jogador.gatosNoite.push(gato);
      //   });
      // }
      //jogador.gatosRodada = [];
      //this.updateJogador(jogador)
    });

  }

  updateJogador(jogador: JogadoresPartida) {
    console.log("Jogador ", jogador);

    let entrada: Jogadores = {
      _id: jogador._id,
      nome: jogador.nome,
      apelido: jogador.apelido,
      gatosNoite: [],
      gatosRodada: [],
      totalGatos: jogador.totalGatos
    }

    console.log("Editar" ,entrada);

    this.service.update(entrada).subscribe(
      success => {
        console.log('sucesso ', success)
        this.router.navigate(['/']);
      },
      error => console.error(error),
      () => console.log('request completo')
    );

  }


}
