export class Clientes {

     "id"?: number;
     "nome": string;
     "sobrenome": string;
     "dataNascimento": Date;
     "telefone": number;
    //  "endereco": Enderecos;
     "email": string;
     "senha": string;
}

export class ClienteResponse extends Clientes {}
