import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Jogadores } from 'src/app/jogadores';

@Component({
  selector: 'app-selecao-jogadores',
  templateUrl: './selecao-jogadores.component.html',
  styleUrls: ['./selecao-jogadores.component.scss']
})
export class SelecaoJogadoresComponent {

  @Input() listaJogadores$?: Jogadores[];

  constructor(
    public bsModalRef: BsModalRef
  ) {
    console.log("Aqui", this.listaJogadores$);


  }

  onCloseModal() {
    this.bsModalRef.hide();
  }
}
