import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from 'src/app/_modal';
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

  guiaId: number = 1;
  passeios: PasseioResponseModel[] = [];
  cliente: ClienteResponse = new ClienteResponse();
  passeioIdSelecionado: number = 0;

  cadastroPasseioPersonalizadoGuiaForm = this.formBuilder.group({
    passeios: [''],
    cliente: new ClienteResponse(),
    duracao: '',
    dataDoPasseio: '',
    descricao:'',
    valorPasseio: 0,
    passeioIdSelecionado: 0
  });


  ngOnInit(){

    const clienteId = Number(this.route.snapshot.paramMap.get('clienteId'));

    this.clienteService.buscarClientePorId(clienteId).subscribe({
      next: (cliente) => {
        this.cliente = cliente
        console.log(this.cliente)
      },
      error: (error) => {

      }
    });

    this.passeioService.buscarPasseioPorGuiaId(this.guiaId).subscribe({
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

    this.passeioService.agendarPersonalizado(this.cadastroPasseioPersonalizadoGuiaForm.value, this.guiaId, this.cliente.id).subscribe({
      next: (agenda) =>{
        this.modalService.open('sucesso-agendamento-passeio-modal');
      },
      error: (error) => {

      }
    });

  }

  closeModal(id: string){
    this.modalService.close(id);
  }

}
