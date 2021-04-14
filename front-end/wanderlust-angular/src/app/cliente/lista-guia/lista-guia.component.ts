import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/_services';
import { GuiaService } from 'src/app/_services/guia.service';

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
        private guiaService: GuiaService,) { }


   listaGuiaForm=this.formBuilder.group({
    nomeGuia:"",
    valor:"",
    cidade:"",

   });

   loading = false;
   submitted = false;

  ngOnInit(): void {
  }

}
