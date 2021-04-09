import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GuiaService {
  constructor(private http: HttpClient) {
  }

  create(value: any) {

    const { nome,
    sobrenome,
    endereco,
    cidade,
    dataNascimento,
    telefone,
    numeroCadastur,
    email,
    senha } = value;

    this.http.post<any>(
      `http://localhost:3000/login/clientes`
      , { email, senha })
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));

  }
}
