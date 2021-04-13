import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, ClienteService, AuthenticationService } from 'src/app/_services';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss']
})
export class CadastroClienteComponent implements OnInit {
  cadastroClienteForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    birthday: new FormControl(''),
    city: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  submitted = false;
  loading = false;

  constructor(
    private alertService: AlertService,
    // private authenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,
    private clienteService: ClienteService,
  ) {

  }

  ngOnInit(): void {
  }

  onSubmit(): void {

    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();
    // stop here if form is invalid
    if (this.cadastroClienteForm.invalid) {
      console.log(this.cadastroClienteForm)
      return;
    }

    this.loading = true;
    this.clienteService.criarCliente({
      "nome": this.cadastroClienteForm.value.firstName,
      "sobrenome": this.cadastroClienteForm.value.lastName,
      "dataNascimento": this.cadastroClienteForm.value.birthday,
      "telefone": this.cadastroClienteForm.value.phone,
      "endereco": this.cadastroClienteForm.value.city,
      "email": this.cadastroClienteForm.value.email,
      "senha": this.cadastroClienteForm.value.password,
    })
      .subscribe({
        next: () => {
          // get return url from query parameters or default to home page
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
          this.router.navigateByUrl(returnUrl);
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }
}
