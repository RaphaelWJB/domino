import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaJogadoresComponent } from './lista-jogadores/lista-jogadores.component';
import { JogadorFormComponent } from './jogador-form/jogador-form.component';
import { JogoNoiteComponent } from './jogo-noite/jogo-noite.component';

const routes: Routes = [
  {path: '', component: ListaJogadoresComponent},
  {path: 'novo-jogador', component: JogadorFormComponent},
  {path: 'editar-jogador:id', component: JogadorFormComponent},
  {path: 'jogo-noite', component: JogoNoiteComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
