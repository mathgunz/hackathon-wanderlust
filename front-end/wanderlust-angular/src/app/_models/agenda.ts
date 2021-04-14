import { Clientes, Guia, Passeio } from ".";

export class Agenda {

     "id"?: number;

     "guia": Guia;

     "passeio": Passeio;

     "data": Date;

     "duracao": string;

     "status": string;
     "statusPage"?: string;

     "tipo": string;

     "clientesAgendados"?: ClientesAgendados[];

     "descricao": string;

     "valor": number;

     "pontoReferencia": string;

}

export class ClientesAgendados {

     "id"?: number;

     "cliente": Clientes;
}
