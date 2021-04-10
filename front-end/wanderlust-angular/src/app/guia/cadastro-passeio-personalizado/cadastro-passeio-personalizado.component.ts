import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from 'src/app/_modal';
import { PasseioResponseModel } from 'src/app/_models/passeio';
import { AlertService } from 'src/app/_services';
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
    private passeioService: PasseioService
  ) {
  }

  guiaId: number = 1;
  passeios: PasseioResponseModel[] = [];

  cadastroPasseioPersonalizadoGuiaForm = this.formBuilder.group({
    passeios: [''],
  });


  ngOnInit(){

    this.passeioService.buscarPasseioPorGuiaId(this.guiaId).subscribe({
      next: (passeios) => {

        this.passeios = passeios;
        // passeios.forEach(passeio => {
        //     this.passeios.push(passeio);
        //   });
          console.log(this.passeios)
      },
      error: error => {
        console.log(error)
      }
    });

  }



}
