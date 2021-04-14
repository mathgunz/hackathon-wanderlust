import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/_services';
import { PasseioService } from 'src/app/_services/passeio.service';
import { GuiaService } from 'src/app/_services/guia.service';

@Component({
  selector: 'app-detalhe-guia',
  templateUrl: './detalhe-guia.component.html',
  styleUrls: ['./detalhe-guia.component.scss']
})
export class DetalheGuiaComponent implements OnInit {

  constructor(
      private formBuilder: FormBuilder,
          private route: ActivatedRoute,
          private router: Router,
          private alertService: AlertService,
          private passeioService: PasseioService,) { }

  detalheGuiaForm = this.formBuilder.group({
   nome:"",
   sobrenome:"",
   cadastur:"",
   telefone:"",
   descricao:"",
   nomedoPasseio:"",

  });

  loading = false;
  submitted = false;

  ngOnInit(): void {
  }

}
