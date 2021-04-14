import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, GuiaService } from 'src/app/_services';

@Component({
  selector: 'app-index-cliente',
  templateUrl: './index-cliente.component.html',
  styleUrls: ['./index-cliente.component.scss']
})
export class IndexClienteComponent implements OnInit {
  proximoDestinoForm = this.formBuilder.group({
    nextTrip: "",
    initialDate: "",
    lastDate: "",
    peopleGoingTo: "",
  });
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private guiaService: GuiaService,
  ) { }

  ngOnInit(): void {
  }

  buscarGuias(): void {
    this.guiaService.getByCity(this.proximoDestinoForm.value.nextTrip)
      .subscribe({
        next: () => {
          // get return url from query parameters or default to home page
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/lista-guia';
          this.router.navigateByUrl(returnUrl);
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }

}
