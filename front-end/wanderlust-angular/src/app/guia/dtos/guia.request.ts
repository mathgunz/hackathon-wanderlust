export class GuiaRequest {
  "nome": string;
  "sobrenome": string;
  "telefone": number;
  "dataNascimento": Date;
  "endereco"?: {
      "endereco": string;
      "cidade": string;
  };
  "email": string;
  "senha": string;
  "cadastur": string;
  "descricao": string;
}
