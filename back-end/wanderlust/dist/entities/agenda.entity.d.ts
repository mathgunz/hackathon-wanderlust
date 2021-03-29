import { Clientes } from './clientes.entity';
import { Guias } from './guias.entity';
import { Passeios } from './passeios.entity';
export declare class Agendas {
    id?: number;
    guia: Guias;
    passeio: Passeios;
    inicio: Date;
    fim: Date;
    status: string;
    tipo: string;
    clientesAgendados?: ClientesAgendados[];
}
export declare class ClientesAgendados {
    id?: number;
    agenda: Agendas;
    cliente: Clientes;
}
