import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ModalModule } from './_modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificacoesComponent } from './notificacoes/notificacoes.component';
import { ContatosComponent } from './guia/contato-sac/contato-sac.component';
import { AjudarComponent } from './ajudar/ajudar.component';
import { HomeComponent } from './home/home.component';

import {
  GuiaComponent,
  CadastroPasseioComponent,
  CadastroPasseioPersonalizadoComponent,
  HomeGuiaComponent,
  PasseiosComponent,
  LoginGuiaComponent,
  PerfilGuiaComponent
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
  PasseiosAnterioresComponent
} from './cliente';

import {
  HeadersComponent,
  FooterComponent,
  AlertComponent,
  HeaderSlideComponent,
} from './_components';


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
    AjudarComponent,
    CadastroPasseioPersonalizadoComponent,
    HomeGuiaComponent,
    HeadersComponent,
    HomeComponent,
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
    PerfilGuiaComponent
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
