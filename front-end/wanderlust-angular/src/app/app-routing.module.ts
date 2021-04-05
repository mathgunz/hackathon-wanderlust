import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';

const routes: Routes = [
  { path: 'login', component: LoginClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
