import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, AuthenticationService } from '../../_services';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.scss']
})

export class LoginClienteComponent implements OnInit {
  loginForm = this.formBuilder.group({
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
    private alertService: AlertService
  ) {
  }

  ngOnInit() {

  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe({
        next: () => {
          // get return url from query parameters or default to home page
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigateByUrl(returnUrl);
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }

}
