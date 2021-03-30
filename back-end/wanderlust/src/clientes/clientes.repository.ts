import { Injectable } from '@nestjs/common';
import { Clientes } from 'src/entities/clientes.entity';
import { Repository, EntityRepository } from 'typeorm';

@Injectable()
@EntityRepository(Clientes)
export class ClientesRepository extends Repository<Clientes> {
    
    async findByEmailAndPassword(email: string, senha: string) {

      const cliente = await this.createQueryBuilder('clientes')
                            .where('email = :emailParameter', {emailParameter: email})
                            .andWhere('senha = :senhaParameter', {senhaParameter: senha})
                            .getOne();

      return cliente;
    }

    public async findById(clienteId: number): Promise<Clientes> {
        return await this.findOne(clienteId);
    }
}