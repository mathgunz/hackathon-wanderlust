import { EnderecosModel } from "./endereco";

export class Passeio {

  "id"?: number;
  "nome": string;
  "descricao": string;
  "duracao": string;
  "tipo": string;
  "endereco": EnderecosModel;
}


export class PasseioResponseModel extends Passeio {}


export class CreateAgendaModel {

  "guiaId": number;
  "passeioId"?: number;
  "data": Date;
  "duracao": Date;
  "tipo": string;
  "clienteId"?: number;
  "descricao": string;
  "valor": number;
}
