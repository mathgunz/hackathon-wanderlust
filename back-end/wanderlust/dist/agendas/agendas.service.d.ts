import { ClientesRepository } from 'src/clientes/clientes.repository';
import { Agendas } from 'src/entities/agenda.entity';
import { GuiasRepository } from 'src/guias/guias.repository';
import { PasseiosRepository } from 'src/passeios/passeios.repository';
import { AgendasRepository, ClientesAgendadosRepository } from './agendas.repository';
import { CreateAgendaDto } from './dtos/agendas.dto';
export declare class AgendasService {
    private readonly agendasRepository;
    private readonly guiasRepository;
    private readonly passeiosRepository;
    private readonly clientesRepository;
    private readonly clientesAgendadosRepository;
    constructor(agendasRepository: AgendasRepository, guiasRepository: GuiasRepository, passeiosRepository: PasseiosRepository, clientesRepository: ClientesRepository, clientesAgendadosRepository: ClientesAgendadosRepository);
    create(createAgendaDto: CreateAgendaDto): Promise<Agendas>;
    get(id: number): Promise<Agendas>;
    add(id: number, clienteId: number): Promise<boolean>;
}
