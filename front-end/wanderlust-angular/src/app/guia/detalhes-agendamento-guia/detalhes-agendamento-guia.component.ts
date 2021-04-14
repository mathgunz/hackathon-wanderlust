import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from 'src/app/_modal';
import { Agenda } from 'src/app/_models/agenda';
import { AlertService, AgendaService } from 'src/app/_services';

@Component({
  selector: 'app-detalhes-agendamento-guia',
  templateUrl: './detalhes-agendamento-guia.component.html',
  styleUrls: ['./detalhes-agendamento-guia.component.scss']
})
export class DetalhesAgendamentoGuiaComponent implements OnInit {

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
  agenda: Agenda = new Agenda();

  detalhesAgendaGuiaForm = this.formBuilder.group({
    agenda:''
  });

  ngOnInit(): void {

    const agendaId = Number(this.route.snapshot.paramMap.get('agendaId'));

    this.agendaService.findById(agendaId).subscribe({
        next: (agenda) => {
            this.agenda = agenda;
            console.log('detalhes do guia:'+agenda);
        },
        error: (error) => {
          console.log('erro ao recuerar dados da agenda');
        }
    });
  }

}
