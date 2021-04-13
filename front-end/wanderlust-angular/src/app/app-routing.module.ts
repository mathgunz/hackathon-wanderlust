import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  PerfilClientesComponent,
  LoginClienteComponent,
  CadastroClienteComponent,
} from './cliente';
import {
  GuiaComponent,
  CadastroPasseioPersonalizadoComponent,
  LoginGuiaComponent
} from './guia';
import { AjudarComponent } from './ajudar/ajudar.component';
import { ContatosComponent } from './contatos/contatos.component';
import { PasseiosComponent } from './passeios/passeios.component';
import { HomeGuiaComponent } from './guia/home-guia/home-guia.component';
import { HomeComponent } from './home/home.component';
import { CadastroPasseioComponent } from './guia/cadastro-passeio-fixo/cadastro-passeio.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginClienteComponent },
  { path: 'login-guia', component: LoginGuiaComponent },
  { path: 'ajuda', component: AjudarComponent },
  { path: 'perfil', component: PerfilClientesComponent },
  { path: 'contato', component: ContatosComponent },
  { path: 'passeios', component: PasseiosComponent },
  { path: 'cadastro-guia', component: GuiaComponent },
  { path: 'cadastro-passeio-guia-fixo', component: CadastroPasseioComponent },
  { path: 'cadastro-passeio-guia-personalizado', component: CadastroPasseioPersonalizadoComponent },
  { path: 'cadastro', component: CadastroClienteComponent },
  { path: 'home-guia', component: HomeGuiaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
