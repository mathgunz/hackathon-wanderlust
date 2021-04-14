export class Guia {

    "id": number;
    "nome": string;
    "sobrenome": string;
    "documento": number;
    "telefone": number;
    "endereco"?: {
        "endereco": string;
        "cidade": string;
    };
    "email": string;
    "senha": string;
}
