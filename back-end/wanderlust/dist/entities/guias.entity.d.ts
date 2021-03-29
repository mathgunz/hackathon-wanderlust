import { Enderecos } from './enderecos.entity';
import { Passeios } from './passeios.entity';
export declare class Guias {
    id?: number;
    nome: string;
    sobrenome: string;
    documento: number;
    telefone: number;
    email: string;
    cadastur: string;
    endereco: Enderecos;
    senha: string;
    passeios?: Passeios[];
}
