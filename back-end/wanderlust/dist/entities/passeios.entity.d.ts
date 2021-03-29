import { Enderecos } from './enderecos.entity';
import { Guias } from './guias.entity';
export declare class Passeios {
    id?: number;
    nome: string;
    guia: Guias;
    descricao: string;
    inicio: Date;
    fim: Date;
    duracao: string;
    tipo: string;
    endereco: Enderecos;
}
