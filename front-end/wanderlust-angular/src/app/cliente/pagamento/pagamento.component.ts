import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, ClienteService } from 'src/app/_services';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss']
})
export class PagamentoComponent implements OnInit {

  constructor( private alertService: AlertService,
                  private router: Router,
                  private route: ActivatedRoute,
                  private clienteService: ClienteService,) { }

  pagamentoForm= new FormGroup({
    nomeTitular: new FormControl(''),
    cpfCnpj: new FormControl(''),
    nrCartao: new FormControl(''),
    cvv: new FormControl(''),
    dataValidade: new FormControl(''),
///valor:"",
  });

  submitted = false;
  loading = false;
  ngOnInit(): void {
  }

}
