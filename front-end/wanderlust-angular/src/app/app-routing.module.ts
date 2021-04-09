import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuiaComponent } from './guia/guia.component';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { LoginGuiaComponent } from './login-guia/login-guia.component';

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
