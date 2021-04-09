import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginClienteComponent, PerfilClientesComponent } from './cliente';
import { GuiaComponent, LoginGuiaComponent } from './guia';

import { AjudarComponent } from './ajudar/ajudar.component';
import { ContatosComponent } from './contatos/contatos.component';
import { NotificacoesComponent } from './notificacoes/notificacoes.component';
import { PasseiosComponent } from './passeios/passeios.component';

const routes: Routes = [
  { path: 'login', component: LoginClienteComponent },
  { path: 'login-guia', component: LoginGuiaComponent },
  { path: 'ajuda', component: AjudarComponent },
  { path: 'perfil', component: PerfilClientesComponent },
  { path: 'contato', component: ContatosComponent },
  { path: 'passeios', component: PasseiosComponent },
  { path: 'notificacoes', component: NotificacoesComponent },
  { path: 'cadastro-guia', component: GuiaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
