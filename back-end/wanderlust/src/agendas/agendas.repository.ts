import { Injectable } from '@nestjs/common';
import { Agendas, ClientesAgendados } from 'src/entities/agenda.entity';
import { Repository, EntityRepository } from 'typeorm';
import { FilterAgendasDto } from './dtos/agendas.dto';

@Injectable()
@EntityRepository(Agendas)
export class AgendasRepository extends Repository<Agendas> {
    
    async findByFilter(query: FilterAgendasDto): Promise<Agendas[]> {

        const guias = await this.createQueryBuilder('agendas')
        .leftJoinAndSelect('agendas.guia', 'guia')
        .orWhere('guia.id = :guiaId', {guiaId: query.guiaId})
        .getMany();
  
        return guias;
      }

}

@Injectable()
@EntityRepository(ClientesAgendados)
export class ClientesAgendadosRepository extends Repository<ClientesAgendados> {

}