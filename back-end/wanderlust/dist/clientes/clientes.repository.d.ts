import { Clientes } from 'src/entities/clientes.entity';
import { Repository } from 'typeorm';
export declare class ClientesRepository extends Repository<Clientes> {
    findByEmailAndPassword(email: string, senha: string): Promise<Clientes>;
    findById(clienteId: number): Promise<Clientes>;
}
