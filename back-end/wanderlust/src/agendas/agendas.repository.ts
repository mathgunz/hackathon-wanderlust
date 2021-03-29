import { Injectable } from '@nestjs/common';
import { Agendas, ClientesAgendados } from 'src/entities/agenda.entity';
import { Repository, EntityRepository } from 'typeorm';

@Injectable()
@EntityRepository(Agendas)
export class AgendasRepository extends Repository<Agendas> {

}

@Injectable()
@EntityRepository(ClientesAgendados)
export class ClientesAgendadosRepository extends Repository<ClientesAgendados> {

}