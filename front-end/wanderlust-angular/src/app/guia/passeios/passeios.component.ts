import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Guia } from 'src/app/_models';
import { ModalService } from '../../_modal';
import { AlertService, PasseioService } from '../../_services';

@Component({
  selector: 'app-passeios',
  templateUrl: './passeios.component.html',
  styleUrls: ['./passeios.component.scss']
})
export class PasseiosComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private modalService: ModalService,
    private passeioService: PasseioService
  ) {
  }

  guia: Guia = new Guia();

  passeiosGuiaForm = this.formBuilder.group({
    nome: "",
    descricao:"",
    endereco:"",
    cidade: "",
    tipo:"",
    valor:0,
    duracao:""
  });

  ngOnInit(): void {
    this.guia = JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

  onSubmit(){

    this.passeioService.create(this.passeiosGuiaForm.value, this.guia.id).subscribe({
      next: (passeio) => {

        this.modalService.open('sucesso-cadastro-passeio-modal')
;
      },
      error:(error) => {
        this.modalService.open('erro-cadastro-passeio-modal')
      }
    });

  }

  closeModal(id: string){

    this.modalService.close(id);

  }

}
