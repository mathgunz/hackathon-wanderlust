import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from 'src/app/_modal';
import { PasseioResponseModel, ClienteResponse, Guia } from 'src/app/_models';
import { AlertService, PasseioService, ClienteService } from 'src/app/_services';

@Component({
  selector: 'app-cadastro-passeio',
  templateUrl: './cadastro-passeio.component.html',
  styleUrls: ['./cadastro-passeio.component.scss']
})
export class CadastroPasseioComponent implements OnInit {

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

  cadastroPasseioFixoGuiaForm = this.formBuilder.group({
    passeios: [''],
    cliente: new ClienteResponse(),
    duracao: '',
    dataDoPasseio: '',
    descricao:'',
    valorPasseio: 0,
    pontoReferencia: '',
    passeioIdSelecionado: 0
  });


  ngOnInit(): void {

    this.guia = JSON.parse(localStorage.getItem('currentUser') || '{}');

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

  moverParaHome(){
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home-guia';
    this.router.navigateByUrl(returnUrl);
    this.modalService.close('sucesso-agendamento-passeio-modal');
  }

  closeModal(id: string){
    this.modalService.close(id);
  }

  onSubmit(){

    this.passeioService.agendarFixo(this.cadastroPasseioFixoGuiaForm.value, this.guia.id).subscribe({
      next: (agenda) =>{
        this.modalService.open('sucesso-agendamento-passeio-modal');
      },
      error: (error) => {
        this.modalService.open('erro-agendamento-passeio-modal');
      }
    });

  }

}
