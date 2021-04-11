import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CreateAgendaModel, PasseioResponseModel } from '../_models/passeio';

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
}
