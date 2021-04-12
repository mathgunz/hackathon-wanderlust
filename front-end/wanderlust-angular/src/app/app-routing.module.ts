import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  PerfilClientesComponent,
  LoginClienteComponent,
  CadastroClienteComponent,
} from './cliente';
import {
  GuiaComponent,
  CadastroPasseioComponent,
  CadastroPasseioPersonalizadoComponent,
  LoginGuiaComponent
} from './guia';
import { AjudarComponent } from './ajudar/ajudar.component';
import { ContatosComponent } from './contatos/contatos.component';
import { NotificacoesComponent } from './notificacoes/notificacoes.component';
import { PasseiosComponent } from './passeios/passeios.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginClienteComponent },
  { path: 'login-guia', component: LoginGuiaComponent },
  { path: 'ajuda', component: AjudarComponent },
  { path: 'perfil', component: PerfilClientesComponent },
  { path: 'contato', component: ContatosComponent },
  { path: 'passeios', component: PasseiosComponent },
  { path: 'notificacoes', component: NotificacoesComponent },
  { path: 'cadastro-guia', component: GuiaComponent },
  { path: 'cadastro-passeio-guia-fixo', component: CadastroPasseioComponent },
  { path: 'cadastro-passeio-guia-personalizado', component: CadastroPasseioPersonalizadoComponent },
  { path: 'cadastro', component: CadastroClienteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
