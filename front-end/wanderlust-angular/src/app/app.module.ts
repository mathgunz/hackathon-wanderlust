import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ModalModule } from './_modal';
import { CadastroPasseioComponent } from './guia/cadastro-passeio/cadastro-passeio.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilClientesComponent, LoginClienteComponent } from './cliente';
import { PasseiosComponent } from './passeios/passeios.component';
import { NotificacoesComponent } from './notificacoes/notificacoes.component';
import { ContatosComponent } from './contatos/contatos.component';
import { AjudarComponent } from './ajudar/ajudar.component';
import { GuiaComponent } from './guia';
import { HeadersComponent } from './_components/headers/headers.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginClienteComponent,
    GuiaComponent,
    CadastroPasseioComponent,
    PasseiosComponent,
    PerfilClientesComponent,
    NotificacoesComponent,
    ContatosComponent,
    PasseiosComponent,
    AjudarComponent,
    NotificacoesComponent,
    HeadersComponent,
    HomeComponent,
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
