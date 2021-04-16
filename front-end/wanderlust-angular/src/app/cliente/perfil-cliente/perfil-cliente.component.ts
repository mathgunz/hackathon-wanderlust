import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/_services';
import { ClienteService } from 'src/app/_services/cliente.service';
import { PerfilCliente } from './dtos/perfil.dtos';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.scss']
})
export class PerfilClientesComponent implements OnInit {

  constructor(      private formBuilder: FormBuilder,
                    private route: ActivatedRoute,
                    private router: Router,
                    private alertService: AlertService,
                    private clienteService: ClienteService) { }

  perfilCliente: PerfilCliente = new PerfilCliente;

  perfilForm = this.formBuilder.group({
         nome:"",
         sobrenome:"",
         dataNasc:"",
         cidade:"",
         telefone:"",
         email:"",
  });

  loading = false;
   submitted = false;

 ngOnInit(): void {
  }
 onSubmit(){

  }
}
