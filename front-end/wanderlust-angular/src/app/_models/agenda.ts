import { Clientes, Guia, Passeio } from ".";

export class Agenda {

     "id"?: number;

     "guia": Guia;

     "passeio": Passeio;

     "data": Date;

     "duracao": string;

     "status": string;

     "tipo": string;

     "clientesAgendados"?: ClientesAgendados[];

     "descricao": string;

     "valor": number;

}

export class ClientesAgendados {

     "id"?: number;

     "cliente": Clientes;
}
