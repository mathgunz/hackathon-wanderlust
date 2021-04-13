import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from 'src/app/_modal';
import { AlertService, AuthenticationService } from '../../_services';

@Component({
  selector: 'app-login-guia',
  templateUrl: './login-guia.component.html',
  styleUrls: ['./login-guia.component.scss']
})

export class LoginGuiaComponent implements OnInit {
  loginGuiaForm = this.formBuilder.group({
    email: "",
    password: "",
  });
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
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
    if (this.loginGuiaForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.loginGuia(this.loginGuiaForm.value.email, this.loginGuiaForm.value.password)
      .subscribe({
        next: (user) => {

          if (user === null) {
            this.modalService.open('erro-login-guia-modal');
            return;
          }
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home-guia';
          this.router.navigateByUrl(returnUrl);
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
          this.modalService.open('erro-login-guia-modal');
        }
      });
  }

  closeModal(id: string){
      this.modalService.close(id);
  }

}
