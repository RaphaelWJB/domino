import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaJogadoresComponent } from './lista-jogadores/lista-jogadores.component';
import { JogadorFormComponent } from './jogador-form/jogador-form.component';
import { JogoNoiteComponent } from './jogo-noite/jogo-noite.component';
import { PartidaComponent } from './partida/partida.component';

const routes: Routes = [
  {path: '', component: ListaJogadoresComponent, pathMatch: 'full'},
  {path: 'novo-jogador', component: JogadorFormComponent},
  {path: 'editar-jogador/:id', component: JogadorFormComponent},
  {path: 'jogo-noite', component: JogoNoiteComponent},
  {path: 'partida', component: PartidaComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
