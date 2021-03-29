import { Agendas } from 'src/entities/agenda.entity';
import { AgendasService } from './agendas.service';
import { CreateAgendaDto } from './dtos/agendas.dto';
export declare class AgendasController {
    private readonly agendasService;
    constructor(agendasService: AgendasService);
    get(id: number): Promise<Agendas>;
    create(createAgendaDto: CreateAgendaDto): Promise<Agendas>;
    addCliente(id: number, clienteId: number): Promise<boolean>;
}
