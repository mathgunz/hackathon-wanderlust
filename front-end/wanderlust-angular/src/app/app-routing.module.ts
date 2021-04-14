import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
} from './cliente';
import { DetalhesAgendamentoGuiaComponent } from './guia/detalhes-agendamento-guia/detalhes-agendamento-guia.component';

const routes: Routes = [
  { path: '', component: LoginClienteComponent },
  { path: 'login', component: LoginClienteComponent },
  { path: 'perfil', component: PerfilClientesComponent },
  { path: 'contato', component: ContatosComponent },
  { path: 'cadastro', component: CadastroClienteComponent },
  { path: 'contato', component: ContatoClienteComponent },
  { path: 'contratacao-fixo', component: ContratacaoFixoComponent },
  { path: 'home-cliente', component: IndexClienteComponent },
  { path: 'detalhe-passeios-fixo', component: DetalhePasseiosFixoComponent },
  { path: 'detalhe-passeios-cliente', component: DetalhePasseiosClienteComponent },
  { path: 'passeios-anteriores', component: PasseiosAnterioresComponent },
  { path: 'lista-guia', component: ListaGuiaComponent },
  { path: 'detalhe-guia', component: DetalheGuiaComponent },
  { path: 'pagamento', component: PagamentoComponent },
  
  //guia
  { path: 'home-guia', component: HomeGuiaComponent },
  { path: 'login-guia', component: LoginGuiaComponent },
  { path: 'perfil-guia', component: PerfilGuiaComponent },
  { path: 'passeios', component: PasseiosComponent },
  { path: 'cadastro-guia', component: GuiaComponent },
  { path: 'cadastro-passeio-guia-fixo', component: CadastroPasseioComponent },
  { path: 'cadastro-passeio-guia-personalizado/:clienteId/:agendaId', component: CadastroPasseioPersonalizadoComponent },
  { path: 'detalhe-agendamento-guia/:agendaId', component: DetalhesAgendamentoGuiaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
