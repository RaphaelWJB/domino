import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jogadores } from '../jogadores';
import { delay, take, tap } from 'rxjs';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root',
})
export class ListaJogadoresService {

  //prod: boolean = false


  private readonly API = 'https://api-domino-m59a.onrender.com/api';
  //private readonly API = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get<Jogadores[]>(this.API+"/getAll").pipe();
  }

  create(jogador: Jogadores) {
    return this.http.post(this.API+"/post", jogador).pipe(take(1));
  }

  delete(id: string) {
    return this.http.delete(`${this.API}/delete/${id}`, { responseType: 'text' }).pipe(take(1))   //this.API+"/delete/", ${id}).pipe(take(1));
  }

  getOneById(id: string) {
    console.log("Aqui ");

    return this.http.get<Jogadores>(`${this.API}/getOne/${id}`).pipe(take(1));
  }

  update(jogador: Jogadores) {
    return this.http.patch(`${this.API}/update/${jogador._id}`, jogador).pipe(take(1));
  }

}
