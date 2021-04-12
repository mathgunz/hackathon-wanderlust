import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { EnderecosModel } from '../_models/endereco';
import { CreateAgendaModel, Passeio, PasseioResponseModel } from '../_models/passeio';

@Injectable({
  providedIn: 'root'
})
export class PasseioService {

  constructor(private http: HttpClient) { }

  buscarPasseioPorGuiaId(guiaId: number){

    return this.http.get<PasseioResponseModel[]>(
      `http://localhost:3000/passeios?guiaId=`+guiaId
    ).pipe(map(passeios => {

      console.log('Passeios:'+passeios);
      return passeios;
    }));
  }

  agendarPersonalizado(value: any, guiaId: number, clienteId: number | undefined) {

    console.log('PasseioService:agendarPersonalizado(value:'+JSON.stringify(value)+'guiaId:'+guiaId);

    const createAgenda: CreateAgendaModel = {
      clienteId: clienteId,
      data: value.dataDoPasseio,
      descricao: value.descricao,
      duracao: value.duracao,
      guiaId: guiaId,
      passeioId: Number(value.passeioIdSelecionado),
      tipo: 'PERSONALIZADO',
      valor: Number(value.valorPasseio)
    }

    console.log('PasseioService:createAgenda:'+JSON.stringify(createAgenda));

    return this.http.post<CreateAgendaModel>(
      `http://localhost:3000/agendas`, createAgenda
    ).pipe(map(agenda => {

      console.log('Agenda:'+agenda);
      return agenda;
    }));

  }

  create(value: any, guiaId: number) {

    const passeioRequest: Passeio = {
      descricao: value.descricao,
      duracao: value.duracao,
      nome: value.nome,
      tipo: value.tipoPasseio,
      endereco: {
          cidade: value.cidade,
          endereco: value.endereco
      }
    }

    console.log('PasseioService:create:'+JSON.stringify(passeioRequest));

    return this.http.post<Passeio>(
      `http://localhost:3000/passeios?guiaId=`+guiaId, passeioRequest
    ).pipe(map(passeio => {

      console.log('passeio:'+passeio);
      return passeio;
    }));
  }

}
