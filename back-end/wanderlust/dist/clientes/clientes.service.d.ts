import { Clientes } from 'src/entities/clientes.entity';
import { ClientesRepository } from './clientes.repository';
import { CreateClienteDto, UpdateClienteDto } from './dtos/cliente.dto';
export declare class ClientesService {
    private readonly clientesRepository;
    constructor(clientesRepository: ClientesRepository);
    findByEmailAndPassword(email: string, senha: string): Promise<Clientes>;
    update(clienteDto: UpdateClienteDto, id: number): Promise<Clientes>;
    create(clienteDto: CreateClienteDto): Promise<Clientes>;
    get(id: number): Promise<Clientes>;
    findOne(clienteId: number): Promise<Clientes>;
}
