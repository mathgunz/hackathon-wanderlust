import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.scss']
})
export class LoginClienteComponent implements OnInit {
  loginForm = this.formBuilder.group({
    email: '',
    password: ''
  });
  
  constructor(
    private formBuilder: FormBuilder
  ) {
   
   }

  ngOnInit(): void {
  }

  onSubmit(){
    alert("Oi")
    console.log(this.loginForm.value)
  }

}
