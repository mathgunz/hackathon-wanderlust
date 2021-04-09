import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginClienteComponent } from './cliente/login-cliente/login-cliente.component';
import { GuiaComponent } from './guia/cadastro/guia.cadastro.component';
import { LoginGuiaComponent } from './guia/login-guia/login-guia.component';

const routes: Routes = [
  { path: 'login', component: LoginClienteComponent },
  { path: 'login-guia', component: LoginGuiaComponent },
  { path: 'cadastro-guia', component: GuiaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
