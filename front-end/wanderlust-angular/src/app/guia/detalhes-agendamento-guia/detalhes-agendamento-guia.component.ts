import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from 'src/app/_modal';
import { Guia } from 'src/app/_models';
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

  agenda: Agenda = new Agenda();
  guia: Guia = new Guia();

  detalhesAgendaGuiaForm = this.formBuilder.group({
    agenda:''
  });

  ngOnInit(): void {

    this.guia = JSON.parse(localStorage.getItem('currentUser') || '{}');

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
