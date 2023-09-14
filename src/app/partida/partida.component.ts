import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { map, switchMap } from 'rxjs';
import { JogadoresPartida } from '../jogadores';

@Component({
  selector: 'app-partida',
  templateUrl: './partida.component.html',
  styleUrls: ['./partida.component.scss']
})
export class PartidaComponent implements OnInit, OnChanges {
  desabilitarBotaoEncerrarPartida: boolean = true;

  ngOnChanges(changes: SimpleChanges): void {

    this.listaJogadores.map(res => {
      res.totalPontos = 0;
    })

  }

  @Input() listaJogadores!: JogadoresPartida[]

  listaSelecionada = new Array();

  ngOnInit(): void {



    //this.listaJogadores.map(res => console.log())

  }



  contarGatos() {

    var vencedor = this.recuperarVencedor(this.listaJogadores);
    var devedores = this.recuperarDevedores(this.listaJogadores, vencedor);

    this.descontarGatos(this.listaJogadores, vencedor, devedores);

  }

  recuperarDevedores(jogadores: JogadoresPartida[], vencedor: JogadoresPartida) {

    var devedores: any[] = [];
    jogadores.map((item) => {

      if (item.totalPontos === 0) {
        let gato: any = {
          _id: vencedor._id,
          nome: vencedor.nome
        };
        vencedor.gatosRodada.map((itemGatosTomado) => {
          if (item._id == itemGatosTomado._id) {
            devedores.push(itemGatosTomado);
          }

        });
        item.gatosRodada.push(gato);
      };
      item.totalPontos = 0;
    });

    /*devedores = devedores.filter(function (a) {
        return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
    }, Object.create(null));*/
    return devedores;
  }

  recuperarVencedor(jogadores: JogadoresPartida[]) {
    let vencedor: JogadoresPartida = {
      nome: null,
      apelido: '',
      gatosNoite: [],
      gatosRodada: [],
      totalPontos: 0,
      totalGatos: 0
    };
    jogadores.map((item) => {
      if (item.totalPontos >= 4) {
        vencedor = item;
      }
    });

    return vencedor;
  }

  descontarGatos(jogadores: JogadoresPartida[], vencedor: JogadoresPartida, devedores: any) {




    let id_erdedor = '';
    devedores.map((devedor: { nome: string, _id: string }) => {
      console.log("Devedor ", devedor)
      console.log("Vencedor ", vencedor);

      //if(devedor._id === )

      //vencedor.gatosRodada.pop();

      vencedor.gatosRodada.map((res, index) => {
        if (id_erdedor.length == 0) {
          if (res._id === devedor._id) {

            id_erdedor = res._id
            vencedor.gatosRodada.splice(index, 1)
          }
        }

        //vencedor.gatosRodada.indexOf(res) === index
      });

      //console.log("Novo array ", novoArray);


      jogadores.map(jogador => {

        console.log('Jogador ', jogador)


        if (jogador._id === devedor._id) {
          let retirarGato = {
            id: vencedor._id,
            nome: vencedor.nome
          };

          jogador.gatosRodada.map((res, index) => {

            console.log("MAP jogador ", res._id);

            console.log("MAP devedor ", devedor._id);

            //if(id_erdedor.length == 0){
            if (jogador._id === devedor._id) {
              console.log("MAP jogador 2", res);
              jogador.gatosRodada.pop()
            }
            // }

            //vencedor.gatosRodada.indexOf(res) === index
          });
          //jogador.gatosRodada = jogador.gatosRodada.filter((re, indice, array) => re._id != retirarGato.id);


          //jogador.gatosRodada = jogador.gatosRodada.filter((re, indice, array) => {






        }
      });
    });
  }

  finalizarpartida(jogadores: JogadoresPartida[]) {

    console.log("Jogadores ", jogadores);

  }

  onChangePontos(ponto: number) {
    console.log("Pontos ", ponto);


    if(ponto >= 4){
      this.desabilitarBotaoEncerrarPartida = false;
    }else{
      this.desabilitarBotaoEncerrarPartida = true;
    }

  }


}
