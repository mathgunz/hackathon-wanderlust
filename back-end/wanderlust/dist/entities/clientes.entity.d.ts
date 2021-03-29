import { Enderecos } from './enderecos.entity';
export declare class Clientes {
    id?: number;
    nome: string;
    sobrenome: string;
    documento: number;
    telefone: number;
    endereco: Enderecos;
    email: string;
    senha: string;
}
