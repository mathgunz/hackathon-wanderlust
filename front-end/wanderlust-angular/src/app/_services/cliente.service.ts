import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ClienteResponse } from '../_models/cliente';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  constructor(private http: HttpClient) {
  }

  buscarClientePorId(clienteId: number) {

    console.log('ClienteService:clienteId:'+ clienteId);

    return this.http.get<ClienteResponse>(
      `http://localhost:3000/clientes/`+clienteId)
        .pipe(map(cliente => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes

            console.log('cliente:'+cliente);

            return cliente;
        }));
  }

}
