export class User {
    "nome": string;
    "sobrenome": string;
    "documento": number;
    "telefone": number;
    "endereco"?: {
        "endereco": string;
        "bairro": string;
        "cep": number;
        "complemento": string;
        "numero": number;
        "cidade": string;
        "estado": string;
    };
    "email": string;
    "senha": string;
}