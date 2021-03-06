import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { GuiaRequest } from '../guia/dtos/guia.request';

@Injectable({
  providedIn: 'root'
})

export class GuiaService {
  constructor(private http: HttpClient) {
  }

  create(value: any) {

    console.log('GuiaService:value:'+ value);

    const {
    nome,
    sobrenome,
    endereco,
    cidade,
    dataNascimento,
    telefone,
    numeroCadastur,
    email,
    senha,
    descricao} = value;

    const cadastur = numeroCadastur;

    const guiaRequest: GuiaRequest = {
      dataNascimento: dataNascimento,
      email: email,
      nome: nome,
      senha: senha,
      sobrenome: sobrenome,
      telefone: telefone,
      cadastur: cadastur,
      descricao: descricao,
      endereco: {
        cidade: cidade,
        endereco: endereco
      }
    }

    console.log('GuiaService:guiaRequest:'+ guiaRequest);

    return this.http.post<GuiaRequest>(
      `http://localhost:3000/guias`
      , guiaRequest)
        .pipe(map(guia => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes

            console.log('guia:'+guia);

            return guia;
        }));

  }

  getByCity(city: string){
    return this.http.get(
      `http://localhost:3000/guias?city=${city}`)
        .pipe(map(guia => {
            return guia;
        }));

  }
}
