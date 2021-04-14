import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjudarComponent } from './ajudar/ajudar.component';
import { HomeComponent } from './home/home.component';

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
  PasseiosAnterioresComponent
} from './cliente';
import { DetalhesAgendamentoGuiaComponent } from './guia/detalhes-agendamento-guia/detalhes-agendamento-guia.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginClienteComponent },
  { path: 'ajuda', component: AjudarComponent },
  { path: 'perfil', component: PerfilClientesComponent },
  { path: 'contato', component: ContatosComponent },
  { path: 'cadastro', component: CadastroClienteComponent },
  { path: 'contato', component: ContatoClienteComponent },
  { path: 'contratacao-fixo', component: ContratacaoFixoComponent },
  { path: 'detalhes-fixo', component: DetalhePasseiosFixoComponent },
  { path: 'detalhes', component: DetalhePasseiosClienteComponent },
  { path: 'home-cliente', component: IndexClienteComponent },
  { path: 'passeios-anteriores', component: PasseiosAnterioresComponent },

  //guia
  { path: 'home-guia', component: HomeGuiaComponent },
  { path: 'login-guia', component: LoginGuiaComponent },
  { path: 'perfil-guia', component: PerfilGuiaComponent },
  { path: 'passeios', component: PasseiosComponent },
  { path: 'cadastro-guia', component: GuiaComponent },
  { path: 'cadastro-passeio-guia-fixo', component: CadastroPasseioComponent },
  { path: 'cadastro-passeio-guia-personalizado', component: CadastroPasseioPersonalizadoComponent },
  { path: 'detalhe-agendamento-guia/:agendaId', component: DetalhesAgendamentoGuiaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
