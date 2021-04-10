import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { PasseioResponseModel } from '../_models/passeio';

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
}
