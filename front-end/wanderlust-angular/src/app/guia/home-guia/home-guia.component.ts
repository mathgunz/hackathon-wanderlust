import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from 'src/app/_modal';
import { Clientes, Guia } from 'src/app/_models';
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

  guia: Guia = new Guia();
  agendas: Agenda[] = [];

  agendasNotificacoes: Agenda[] = [];
  agendaSelecionada: Agenda = new Agenda();
  clienteSelecionado: Clientes = new Clientes();

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

    this.guia = JSON.parse(localStorage.getItem('currentUser') || '{}');

    this.agendaService.findByGuiaId(this.guia.id).subscribe({
      next: (agendas) => {

        console.log('lista de agendas do Guia:'+JSON.stringify(agendas));

        this.agendas = agendas.filter((agenda) =>{
          agenda.statusPage = this.getDescricao(agenda.status);
          return agenda.status !== 'PENDENTE_CONFIRMACAO_GUIA'
        });
      },
      error: (error) => {
        console.log('DEU RUIM CONSULTA DE AGENDAS DO GUIA');
      }
    });

    this.agendaService.findByGuiaId(this.guia.id).subscribe({
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

  getDescricao(status: string): string{

    if (status === 'PENDENTE_CONFIRMACAO_GUIA') {
      return 'Aguardando confirmação do Guia'
    } else if (status === 'PENDENTE_CONFIRMACAO_CLIENTE') {
      return 'Aguardando confirmação do Cliente'
    } else if(status === 'AGENDADO') {
      return 'Agendado'
    }

    return 'Não definido';
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

  detalhesNotificacao(id: string, agenda: Agenda, cliente: Clientes){

    this.agendaSelecionada = agenda;
    this.clienteSelecionado = cliente;
    this.modalService.open(id);
  }

  contratarPasseioPersonalizado(id: string){


    const returnUrl =
    this.route.snapshot.
    queryParams['returnUrl'] || 'cadastro-passeio-guia-personalizado/'+this.clienteSelecionado.id+'/'+this.agendaSelecionada.id;
    this.router.navigateByUrl(returnUrl);

    this.modalService.close(id);
  }

  encerrarAtendimento(id: string){
    this.modalService.close(id);
  }

}
