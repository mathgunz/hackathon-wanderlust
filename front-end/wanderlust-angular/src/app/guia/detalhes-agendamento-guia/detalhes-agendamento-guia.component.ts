import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from 'src/app/_modal';
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

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('agendaId'));

    console.log('detalhes agendaid:'+id);

  }

}
