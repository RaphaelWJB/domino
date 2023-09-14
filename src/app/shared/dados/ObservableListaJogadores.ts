import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Jogadores } from "src/app/jogadores";

@Injectable({
  providedIn: 'root'
})

export class ObservableListaJogadores {
  public joga!: Jogadores[];

  public jogadores = new BehaviorSubject(this.joga)
  public jogadoresNoite = new BehaviorSubject(this.joga)
    constructor() { }

    setConexao(jogadores: Jogadores[]){
      console.log("Conexao ", jogadores);
      this.jogadores.next(jogadores);
    }

    getConexao(){
        return this.jogadores.asObservable();
    }

    setJogadoresNoite(jogadores: Jogadores[]) {
      console.log("Conexao ", jogadores);
      this.jogadoresNoite.next(jogadores);
    }

    getJogadoresNoite() {
      return this.jogadoresNoite
    }
}
