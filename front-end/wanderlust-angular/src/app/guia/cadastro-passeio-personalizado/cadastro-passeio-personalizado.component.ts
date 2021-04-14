import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from 'src/app/_modal';
import { Guia } from 'src/app/_models';
import { Agenda } from 'src/app/_models/agenda';
import { ClienteResponse } from 'src/app/_models/cliente';
import { PasseioResponseModel } from 'src/app/_models/passeio';
import { AlertService } from 'src/app/_services';
import { ClienteService } from 'src/app/_services/cliente.service';
import { PasseioService } from 'src/app/_services/passeio.service';

@Component({
  selector: 'app-cadastro-passeio-personalizado',
  templateUrl: './cadastro-passeio-personalizado.component.html',
  styleUrls: ['./cadastro-passeio-personalizado.component.scss']
})
export class CadastroPasseioPersonalizadoComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private modalService: ModalService,
    private passeioService: PasseioService,
    private clienteService: ClienteService
  ) {
  }

  passeios: PasseioResponseModel[] = [];
  cliente: ClienteResponse = new ClienteResponse();
  passeioIdSelecionado: number = 0;
  guia: Guia = new Guia();
  agendaId: number = 0;

  cadastroPasseioPersonalizadoGuiaForm = this.formBuilder.group({
    passeios: [''],
    cliente: new ClienteResponse(),
    duracao: '',
    dataDoPasseio: '',
    descricao:'',
    valorPasseio: 0,
    pontoReferencia: '',
    passeioIdSelecionado: 0
  });


  ngOnInit(){

    this.guia = JSON.parse(localStorage.getItem('currentUser') || '{}');

    const clienteId = Number(this.route.snapshot.paramMap.get('clienteId'));
    this.agendaId = Number(this.route.snapshot.paramMap.get('agendaId'));

    this.clienteService.buscarClientePorId(clienteId).subscribe({
      next: (cliente) => {
        this.cliente = cliente
        console.log(this.cliente)
      },
      error: (error) => {

      }
    });

    this.passeioService.buscarPasseioPorGuiaId(this.guia.id).subscribe({
      next: (passeios) => {

        this.passeios = passeios;
        console.log(this.passeios)
      },
      error: error => {
        console.log(error)
      }
    });

  }

  onSubmit(){

    this.passeioService.agendarPersonalizado(this.cadastroPasseioPersonalizadoGuiaForm.value, this.guia.id, this.cliente.id, this.agendaId).subscribe({
      next: (agenda) =>{
        this.modalService.open('sucesso-agendamento-passeio-modal');
      },
      error: (error) => {

      }
    });

  }

  moverParaHome(){
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home-guia';
    this.router.navigateByUrl(returnUrl);
    this.modalService.close('sucesso-agendamento-passeio-modal');
  }

  closeModal(id: string){
    this.modalService.close(id);
  }

}
