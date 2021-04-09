import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginClienteComponent } from './cliente/login-cliente/login-cliente.component';
import { CadastroPasseioComponent } from './guia/cadastro-passeio/cadastro-passeio.component';
import { GuiaComponent } from './guia/cadastro/guia.cadastro.component';
import { LoginGuiaComponent } from './guia/login-guia/login-guia.component';
import { AjudarComponent } from './ajudar/ajudar.component';
import { ContatosComponent } from './contatos/contatos.component';
import { NotificacoesComponent } from './notificacoes/notificacoes.component';
import { PasseiosComponent } from './passeios/passeios.component';
import { PerfilClientesComponent } from './cliente';


const routes: Routes = [
  { path: 'login', component: LoginClienteComponent },
  { path: 'login-guia', component: LoginGuiaComponent },
  { path: 'ajuda', component: AjudarComponent },
  { path: 'perfil', component: PerfilClientesComponent },
  { path: 'contato', component: ContatosComponent },
  { path: 'passeios', component: PasseiosComponent },
  { path: 'notificacoes', component: NotificacoesComponent },
  { path: 'cadastro-guia', component: GuiaComponent },
  { path: 'cadastro-guia', component: GuiaComponent },
  { path: 'cadastro-passeio-guia', component: CadastroPasseioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
