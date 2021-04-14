import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteResponse } from 'src/app/_models/cliente';
import { AlertService } from 'src/app/_services';
import { ClienteService } from 'src/app/_services/cliente.service';
import { PasseioService } from 'src/app/_services/passeio.service';
import { GuiaService } from 'src/app/_services/guia.service';

@Component({
  selector: 'app-passeios-anteriores',
  templateUrl: './passeios-anteriores.component.html',
  styleUrls: ['./passeios-anteriores.component.scss']
})
export class PasseiosAnterioresComponent implements OnInit {

  constructor(      private formBuilder: FormBuilder,
                    private route: ActivatedRoute,
                    private router: Router,
                    private alertService: AlertService,
                    private passeioService: PasseioService,
                    private clienteService: ClienteService,
                    ) { }

  passeiosAnterioresForm=this.formBuilder.group({
  cidadePasseio:"",
  dataPasseio:"",
  nomeGuia:"",
  tipoPasseio:"",
  descricaoPasseio:"",
  roteiro:"",
  valor:"",

  });

  loading = false;
  submitted = false;

  ngOnInit(): void {
  }

}
