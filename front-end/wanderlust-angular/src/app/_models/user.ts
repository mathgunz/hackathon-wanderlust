export class User {
    "id"?:number
    "nome"?: string;
    "sobrenome"?: string;
    "documento"?: number;
    "telefone"?: number;
    "dataNascimento"?: string;
    "endereco"?: {
        "endereco"?: string;
        "bairro"?: string;
        "cep"?: number;
        "complemento"?: string;
        "numero"?: number;
        "cidade"?: string;
        "estado"?: string;
    };
    "email"?: string;
    "senha"?: string;
}
