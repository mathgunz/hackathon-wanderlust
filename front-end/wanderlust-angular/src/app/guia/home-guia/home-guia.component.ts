import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from 'src/app/_modal';
import { Agenda } from 'src/app/_models/agenda';
import { AgendaService, AlertService, PasseioService } from 'src/app/_services';

@Component({
  selector: 'app-home-guia',
  templateUrl: './home-guia.component.html',
  styleUrls: ['./home-guia.component.scss']
})
export class HomeGuiaComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private modalService: ModalService,
    private agendaService: AgendaService,
  ) { }


  guiaId: number = 1;
  clienteId: number = 1;

  agendas: Agenda[] = [];

  agendasNotificacoes: Agenda[] = [];


  agendaGuiaForm = this.formBuilder.group({
    passeio:'',
    descricao:'',
    data:'',
    status:'',
    clienteNome:'',
    detalhes:'',
    agendas: [''],
    agendasNotificacoes: ['']
  });


  ngOnInit(): void {

    this.agendaService.findByGuiaId(this.guiaId).subscribe({
      next: (agendas) => {

        console.log('lista de agendas do Guia:'+JSON.stringify(agendas));

        this.agendas = agendas.filter(function(agenda){
          return agenda.status === 'AGENDADO'
        });
      },
      error: (error) => {
        console.log('DEU RUIM CONSULTA DE AGENDAS DO GUIA');
      }
    });

    this.agendaService.findByGuiaId(this.guiaId).subscribe({
      next: (agendasNotificacoes) => {
          this.agendasNotificacoes = agendasNotificacoes.filter(function(agenda){
            return agenda.status === 'PENDENTE_CONFIRMACAO_GUIA'
          });
      },
      error: (error) => {
        console.log('DEU RUIM CONSULTA SOLICITACOES DE AGENDAS DO GUIA');
      }
    });

  }

  filterByStatus(obj: Agenda){
    if (obj.status === '') {
      return true;
    }else {
      return false;
    }
  }

  onSubmit(){



  }

  detalhesAgendamentoGuiaModal(agenda: Agenda){

    console.log('detalhesAgendamentoGuiaModal:'+ agenda.id);

    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/detalhe-agendamento-guia/'+agenda.id;
    this.router.navigateByUrl(returnUrl);

  }

  closeModal(id: string){

  };

  detalhesNotificacao(id: string){
    this.modalService.open(id);
  }

  contratarPasseioPersonalizado(){

  }

}
