import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteResponse } from 'src/app/_models/cliente';
import { AlertService } from 'src/app/_services';
import { ClienteService } from 'src/app/_services/cliente.service';
import { PasseioService } from 'src/app/_services/passeio.service';
import { GuiaService } from 'src/app/_services/guia.service';
import { DetalhesPasseios } from './dtos/detalhe.passeio.dtos';

@Component({
  selector: 'app-detalhe-passeios-cliente',
  templateUrl: './detalhe-passeios-cliente.component.html',
  styleUrls: ['./detalhe-passeios-cliente.component.scss']
})
export class DetalhePasseiosClienteComponent implements OnInit {

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private alertService: AlertService,
      private passeioService: PasseioService,
      private clienteService: ClienteService,
      private guiaService: GuiaService) { }


  detalhesPasseios: DetalhesPasseios = new DetalhesPasseios;

  detalhePasseiosClienteForm=this.formBuilder.group({
    nomedoPasseio:"",
    descricao:"",
    nomeGuia:"",
    datadoPasseio:"",
    duracao:"",
    roteiro:"",
    valor:"",
    enderecoPasseio:"",
    status:"",
    detalhesPasseios:""
  });
  loading = false;
  submitted = false;

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
