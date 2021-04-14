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

  agendarPersonalizado(value: any, guiaId: number, clienteId: number | undefined, agendaId: number) {

    const createAgenda: CreateAgendaModel = {
      clienteId: clienteId,
      data: value.dataDoPasseio,
      descricao: value.descricao,
      duracao: value.duracao,
      guiaId: guiaId,
      passeioId: Number(value.passeioIdSelecionado),
      tipo: 'PERSONALIZADO',
      valor: Number(value.valorPasseio),
      status: 'PENDENTE_CONFIRMACAO_CLIENTE',
      pontoReferencia: value.pontoReferencia
    }

    console.log('para excluir:'+ agendaId);
    return this.http.delete<boolean>(
      `http://localhost:3000/agendas/`+agendaId
    ).pipe(map(excluido => {
      console.log('foi excluido:'+ excluido);

    return this.http.post<CreateAgendaModel>(
      `http://localhost:3000/agendas`, createAgenda
    ).pipe(map(agenda => {

      console.log('Agenda Criada:'+agenda);
      return agenda;
    }));


    }));
  }

  create(value: any, guiaId: number) {

    const passeioRequest: Passeio = {
      descricao: value.descricao,
      duracao: value.duracao,
      nome: value.nome,
      tipo: value.tipo,
      endereco: {
          cidade: value.cidade,
          endereco: value.endereco
      }
    }

    return this.http.post<Passeio>(
      `http://localhost:3000/passeios?guiaId=`+guiaId, passeioRequest
    ).pipe(map(passeio => {

      return passeio;
    }));
  }

}
