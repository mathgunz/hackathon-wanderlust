import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from 'src/app/_modal';
import { AlertService, GuiaService } from 'src/app/_services';

@Component({
  selector: 'app-guia',
  templateUrl: './guia.cadastro.component.html',
  styleUrls: ['./guia.cadastro.component.scss']
})

export class GuiaComponent implements OnInit {

  cadastroGuiaForm = this.formBuilder.group({
    nome: "",
    sobrenome:"",
    endereco:"",
    cidade: "",
    dataNascimento:"",
    telefone:"",
    numeroCadastur:"",
    email: "",
    senha: "",
  });

  nomeGuia: string = "";

  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private guiaService: GuiaService,
    private modalService: ModalService
  ) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();
    // stop here if form is invalid

    this.loading = true;

    this.guiaService.create(this.cadastroGuiaForm.value).subscribe({
      next: (guia) => {
        // get return url from query parameters or default to home page
        this.nomeGuia = guia.nome;
        this.openModal('custom-modal-1');
      },
      error: error => {

        console.log('erroe');
        this.loading = false;
      }
    });

  }

openModal(id: string) {
    this.modalService.open(id);
}

closeModal(id: string) {
    this.modalService.close(id);
}

irParaLoginModal() {
  const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login-guia';
  this.router.navigateByUrl(returnUrl);
}

}
