import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User, ClienteResponse } from '../_models';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  constructor(
    private http: HttpClient,
    private localstorage: LocalStorageService,
  ) {
  }

  buscarClientePorId(clienteId: number) {
    return this.http.get<ClienteResponse>(
      `http://localhost:3000/clientes/` + clienteId)
      .pipe(map(cliente => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        this.localstorage.set("user", cliente);
        return cliente;
      }));
  }

  criarCliente(user: User) {
    try {
      return this.http.post<ClienteResponse>(
        `http://localhost:3000/clientes`, user)
        .pipe(map(cliente => {
          return cliente;
        }));
    } catch (error) {
      throw new Error(error)
    }
  }


}
