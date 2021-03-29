import { Clientes } from 'src/entities/clientes.entity';
import { ClientesService } from './clientes.service';
import { CreateClienteDto, UpdateClienteDto } from './dtos/cliente.dto';
export declare class ClientesController {
    private readonly clientesService;
    constructor(clientesService: ClientesService);
    get(id: number): Promise<Clientes>;
    create(cliente: CreateClienteDto): Promise<Clientes>;
    update(clienteDto: UpdateClienteDto, id: number): Promise<Clientes>;
}
