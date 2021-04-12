import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ModalModule } from './_modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasseiosComponent } from './passeios/passeios.component';
import { NotificacoesComponent } from './notificacoes/notificacoes.component';
import { ContatosComponent } from './contatos/contatos.component';
import { AjudarComponent } from './ajudar/ajudar.component';
import { GuiaComponent } from './guia';
import { CadastroPasseioComponent } from './guia/cadastro-passeio-fixo/cadastro-passeio.component';
import { CadastroPasseioPersonalizadoComponent } from './guia/cadastro-passeio-personalizado/cadastro-passeio-personalizado.component';
import { HomeGuiaComponent } from './guia/home-guia/home-guia.component';
import { HomeComponent } from './home/home.component';


import { PerfilClientesComponent, LoginClienteComponent } from './cliente';
import { HeadersComponent } from './_components/headers/headers.component';
import { FooterComponent } from './_components/footer/footer.component';
import { AlertComponent } from './_components/alert/alert.component';
import { HeaderSlideComponent } from './_components/header-slide/header-slide.component';

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
    HeaderSlideComponent
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
