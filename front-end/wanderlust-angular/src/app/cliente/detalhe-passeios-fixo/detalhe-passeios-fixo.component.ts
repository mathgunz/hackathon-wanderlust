import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/_services';
import { ClienteService } from 'src/app/_services/cliente.service';
import { PasseioService } from 'src/app/_services/passeio.service';
import { DetalhesPasseiosFixo } from './dtos/detalhes.passeios.fixo.dtos';

@Component({
  selector: 'app-detalhe-passeios-fixo',
  templateUrl: './detalhe-passeios-fixo.component.html',
  styleUrls: ['./detalhe-passeios-fixo.component.scss']
})
export class DetalhePasseiosFixoComponent implements OnInit {

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private alertService: AlertService,
      private passeioService: PasseioService,
      private clienteService: ClienteService) { }

detalhesPasseiosFixo: DetalhesPasseiosFixo = new DetalhesPasseiosFixo;

   detalhePasseiosFixoForm = this.formBuilder.group({
       nomePasseio:"",
       descricao:"",
       duracao:"",
       tipo:"",
       valor:"",
       enderecoPasseio:"",
       datasDisponiveis:"",

   });
    loading = false;
    submitted = false;

  ngOnInit(): void {
  }
 onSubmit(){

  }
}
