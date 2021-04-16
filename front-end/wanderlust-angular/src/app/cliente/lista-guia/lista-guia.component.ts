import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/_services';
import { GuiaService } from 'src/app/_services/guia.service';
import { ListaGuia } from './dtos/lista.guia.dtos';

@Component({
  selector: 'app-lista-guia',
  templateUrl: './lista-guia.component.html',
  styleUrls: ['./lista-guia.component.scss']
})
export class ListaGuiaComponent implements OnInit {

  constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService,
        private guiaService: GuiaService) { }

  listaGuia: ListaGuia = new ListaGuia;

   listaGuiaForm=this.formBuilder.group({
    nomeGuia:"",
    valor:"",
    cidade:"",

   });

   loading = false;
   submitted = false;

  ngOnInit(): void {
  }
  onSubmit(){

  }
}
