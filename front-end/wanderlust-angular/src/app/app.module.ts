import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ModalModule } from './_modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificacoesComponent } from './notificacoes/notificacoes.component';

import {
  GuiaComponent,
  CadastroPasseioComponent,
  CadastroPasseioPersonalizadoComponent,
  HomeGuiaComponent,
  PasseiosComponent,
  LoginGuiaComponent,
  PerfilGuiaComponent,
  ContatosComponent,
} from './guia';

import {
  PerfilClientesComponent,
  LoginClienteComponent,
  CadastroClienteComponent,
  ContatoClienteComponent,
  ContratacaoFixoComponent,
  DetalhePasseiosFixoComponent,
  DetalhePasseiosClienteComponent,
  IndexClienteComponent,
  PasseiosAnterioresComponent,
  ListaGuiaComponent,
  DetalheGuiaComponent,
  PagamentoComponent,
  PasseiosClienteComponent,
} from './cliente';

import {
  HeadersComponent,
  FooterComponent,
  AlertComponent,
  HeaderSlideComponent,
} from './_components';
import { DetalhesAgendamentoGuiaComponent } from './guia/detalhes-agendamento-guia/detalhes-agendamento-guia.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginClienteComponent,
    GuiaComponent,
    CadastroPasseioComponent,
    PerfilClientesComponent,
    NotificacoesComponent,
    ContatosComponent,
    PasseiosComponent,
    CadastroPasseioPersonalizadoComponent,
    HomeGuiaComponent,
    HeadersComponent,
    PasseiosClienteComponent,
    FooterComponent,
    AlertComponent,
    CadastroPasseioPersonalizadoComponent,
    HeaderSlideComponent,
    CadastroClienteComponent,
    ContatoClienteComponent,
    HeaderSlideComponent,
    ContratacaoFixoComponent,
    DetalhePasseiosFixoComponent,
    DetalhePasseiosClienteComponent,
    IndexClienteComponent,
    PasseiosAnterioresComponent,
    LoginGuiaComponent,
    PerfilGuiaComponent,
    DetalhesAgendamentoGuiaComponent,
    ListaGuiaComponent,
    DetalheGuiaComponent,
    PagamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
