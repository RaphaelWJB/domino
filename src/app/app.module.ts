import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ModalModule } from "ngx-bootstrap/modal";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { ListaJogadoresComponent } from './lista-jogadores/lista-jogadores.component';
import { MenuComponent } from './menu/menu.component';
import { JogadorFormComponent } from './jogador-form/jogador-form.component';
import { JogoNoiteComponent } from './jogo-noite/jogo-noite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SelecaoJogadoresComponent } from './lista-jogadores/modal/selecao-jogadores/selecao-jogadores.component';
import { PartidaComponent } from './partida/partida.component';

@NgModule({
  declarations: [
    AppComponent,

    ListaJogadoresComponent,
    MenuComponent,
    JogadorFormComponent,
    JogoNoiteComponent,
    SelecaoJogadoresComponent,
    PartidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
