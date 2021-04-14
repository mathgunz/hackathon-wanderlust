import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User, ClienteResponse } from '../_models';
import { Agenda } from '../_models/agenda';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})

export class AgendaService {

  constructor(
    private http: HttpClient,
    private localstorage: LocalStorageService,
  ) {
  }

  findByGuiaId(guiaId: number) {
      return this.http.get<Agenda[]>(
      `http://localhost:3000/agendas/?guiaId=` + guiaId)
      .pipe(map(agendas => {
        return agendas;
      }));
  }

  findById(agendaId: any) {
    return this.http.get<Agenda>(
      `http://localhost:3000/agendas/`+agendaId)
      .pipe(map(agenda => {
        return agenda;
      }));
  }

  findByGuiaIdAndStatus(guiaId: any, status: string) {
    return this.http.get<Agenda[]>(
      `http://localhost:3000/agendas/?guiaId=` + guiaId+'&status='+status)
      .pipe(map(agendas => {
        return agendas;
      }));
  }
}
