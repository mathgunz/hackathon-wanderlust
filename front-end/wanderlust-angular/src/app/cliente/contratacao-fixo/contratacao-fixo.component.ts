import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/_services';
import { PasseioService } from 'src/app/_services/passeio.service';
import { ContratacaoFixo } from './dtos/contratacao.fixo.dtos';

@Component({
  selector: 'app-contratacao-fixo',
  templateUrl: './contratacao-fixo.component.html',
  styleUrls: ['./contratacao-fixo.component.scss']
})
export class ContratacaoFixoComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService,
        private passeioService: PasseioService,
  ) {
  }

  contratacaoFixo: ContratacaoFixo = new ContratacaoFixo;

  contratacaoPasseioFixoForm = this.formBuilder.group({
    nomeCidade: "",
    nomePasseio:"",
    descricao: "",
    guia:"",
    cadastur:"",
    tipo:"",
    dataDoPasseio:"",
    duracao:"",
    roteiro:"",
    valor:"",
    endereco:"",
  });

  loading = false;
  submitted = false;


  ngOnInit(): void {
  }
 onSubmit(){

  }
}
