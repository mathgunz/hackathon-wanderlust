import { EnderecosModel } from "./endereco";

export class Clientes {

     "id"?: number;
     "nome": string;
     "sobrenome": string;
     "dataNascimento": Date;
     "telefone": number;
     "endereco": EnderecosModel;
     "email": string;
     "senha": string;
}

export class ClienteResponse extends Clientes {}
