import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjudarComponent } from './ajudar/ajudar.component';
import { ContatosComponent } from './contatos/contatos.component';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { LoginGuiaComponent } from './login-guia/login-guia.component';
import { NotificacoesComponent } from './notificacoes/notificacoes.component';
import { PasseiosComponent } from './passeios/passeios.component';
import { PerfilClientesComponent } from './perfil-clientes/perfil-clientes.component';

const routes: Routes = [
  { path: 'login', component: LoginClienteComponent },
  { path: 'login-guia', component: LoginGuiaComponent },
  { path: 'ajuda', component: AjudarComponent },
  { path: 'perfil', component: PerfilClientesComponent },
  { path: 'contato', component: ContatosComponent },
  { path: 'passeios', component: PasseiosComponent },
  { path: 'notificacoes', component: NotificacoesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
