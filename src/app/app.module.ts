import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ModalModule } from "ngx-bootstrap/modal";
import { ListaJogadoresComponent } from './lista-jogadores/lista-jogadores.component';
import { MenuComponent } from './menu/menu.component';
import { JogadorFormComponent } from './jogador-form/jogador-form.component';
import { JogoNoiteComponent } from './jogo-noite/jogo-noite.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SelecaoJogadoresComponent } from './lista-jogadores/modal/selecao-jogadores/selecao-jogadores.component';

@NgModule({
  declarations: [
    AppComponent,

    ListaJogadoresComponent,
    MenuComponent,
    JogadorFormComponent,
    JogoNoiteComponent,
    SelecaoJogadoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
