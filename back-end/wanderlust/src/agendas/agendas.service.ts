import { Injectable } from '@nestjs/common';
import { ClientesRepository } from 'src/clientes/clientes.repository';
import { Agendas, ClientesAgendados } from 'src/entities/agenda.entity';
import { GuiasRepository } from 'src/guias/guias.repository';
import { PasseiosRepository } from 'src/passeios/passeios.repository';
import { AgendasRepository, ClientesAgendadosRepository } from './agendas.repository';
import { CreateAgendaDto, FilterAgendasDto } from './dtos/agendas.dto';

@Injectable()
export class AgendasService {
  
  constructor(private readonly agendasRepository: AgendasRepository
    , private readonly guiasRepository: GuiasRepository
    , private readonly passeiosRepository: PasseiosRepository
    , private readonly clientesRepository: ClientesRepository
    , private readonly clientesAgendadosRepository: ClientesAgendadosRepository) {}

    async findAll(query: FilterAgendasDto): Promise<Agendas[]> {
      const agendas = await this.agendasRepository.findByFilter(query);
      return agendas;
    }

    async create(createAgendaDto: CreateAgendaDto): Promise<Agendas> {

      const guia = await this.guiasRepository.findOne(createAgendaDto.guiaId);

      const passeio  = await this.passeiosRepository.findOne(createAgendaDto.passeioId);

      const agenda: Agendas = {
        tipo: createAgendaDto.tipo,
        data: createAgendaDto.data,
        duracao: createAgendaDto.duracao,
        status: 'PENDENTE_CONFIRMACAO_CLIENTE',
        descricao: createAgendaDto.descricao,
        guia: guia,
        passeio: passeio,
        valor: createAgendaDto.valor
      }

      return await this.agendasRepository.save(agenda);
    }

    async get(id: number): Promise<Agendas> {
      return await this.agendasRepository.findOne(id);
    }

    async add(id: number, clienteId: number): Promise<boolean> {

      const agenda = await this.agendasRepository.findOne(id);

      const cliente = await this.clientesRepository.findOne(clienteId);

      const clienteAgendado: ClientesAgendados = {
        agenda: agenda,
        cliente: cliente
      }

      const salvo = (await this.clientesAgendadosRepository.save(clienteAgendado)).id != null;

      return salvo;
    }

    async contratar(id: number, clienteId: number): Promise<boolean> {


      const agenda = await this.agendasRepository.findOne(id);

      const cliente = await this.clientesRepository.findOne(clienteId);

      const clienteAgendado: ClientesAgendados = {
        agenda: agenda,
        cliente: cliente
      }

      const salvo = (await this.clientesAgendadosRepository.save(clienteAgendado)).id != null;

      return salvo;
    }
}
