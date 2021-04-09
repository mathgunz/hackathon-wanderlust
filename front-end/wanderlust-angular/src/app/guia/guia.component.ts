import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../_services';
import { GuiaService } from './guia.service.service';

@Component({
  selector: 'app-guia',
  templateUrl: './guia.component.html',
  styleUrls: ['./guia.component.scss']
})

export class GuiaComponent implements OnInit {
  cadastroGuiaForm = this.formBuilder.group({
    nome: "",
    sobrenome:"",
    endereco:"",
    cidade: "",
    dataNascimento:"",
    telefone:"",
    numeroCadastur:"",
    email: "",
    senha: "",
  });

  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private guiaService: GuiaService
  ) {
  }

  ngOnInit() {

  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();
    // stop here if form is invalid

    this.loading = true;

    console.log(this.cadastroGuiaForm.value);

    this.cadastroGuiaForm.value;

    this.guiaService.create(this.cadastroGuiaForm.value);

  }
}
