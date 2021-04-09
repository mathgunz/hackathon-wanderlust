import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../_services';

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
    private alertService: AlertService
  ) {
  }

  ngOnInit() {

  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();
    // stop here if form is invalid



  }
}
