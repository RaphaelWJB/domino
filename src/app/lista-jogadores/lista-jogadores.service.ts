import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jogadores } from '../jogadores';
import { delay, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListaJogadoresService {
  private readonly API = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Jogadores[]>(this.API+"/getAll").pipe(tap(console.log));
  }

  create(jogador: Jogadores) {
    return this.http.post(this.API, jogador).pipe(take(1));
  }
}
