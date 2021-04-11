export class Passseio {

  "id": number;
  "nome": string;
  "descricao": string;
  "inicio": Date;
  "fim": Date;
  "duracao": string;
  "tipo": string;
  // "endereco": EnderecosDto;
}


export class PasseioResponseModel extends Passseio {}


export class CreateAgendaModel {

  "guiaId": number;
  "passeioId": number;
  "data": Date;
  "duracao": Date;
  "tipo": string;
  "clienteId"?: number;
  "descricao": string;
  "valor": number;
}
