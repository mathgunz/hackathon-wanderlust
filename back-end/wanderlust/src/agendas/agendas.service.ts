import { Injectable } from '@nestjs/common';
import { threadId } from 'node:worker_threads';
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
        status: createAgendaDto.status,
        descricao: createAgendaDto.descricao,
        guia: guia,
        passeio: passeio,
        valor: createAgendaDto.valor,
        pontoReferencia: createAgendaDto.pontoReferencia
      }

      const agendaResult = await this.agendasRepository.save(agenda);

      if (createAgendaDto.clienteId !== null) {

        const cliente = await this.clientesRepository.findById(createAgendaDto.clienteId);

        const clienteAgendado: ClientesAgendados = {
          agenda: agendaResult,
          cliente: cliente
        }
  
        this.clientesAgendadosRepository.save(clienteAgendado);            
      }


      return agendaResult;
    }

    async get(id: number): Promise<Agendas> {
      return await this.agendasRepository.findOne(id, 
        {
          join:{
            alias: 'agenda',
            leftJoinAndSelect: {
              passeio: 'agenda.passeio',
              clientesAgendados: 'agenda.clientesAgendados',
              clientes: 'clientesAgendados.cliente',
              enderecos: 'clientes.endereco'
            }
      }});
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

    async delete(id: number) : Promise<boolean>{

      const agenda = await this.agendasRepository.findOne(id, 
        {
          join:{
            alias: 'agenda',
            leftJoinAndSelect: {
              passeio: 'agenda.passeio',
              clientesAgendados: 'agenda.clientesAgendados',
              clientes: 'clientesAgendados.cliente'
            }
      }});


      agenda.clientesAgendados.forEach(element => {
         this.clientesAgendadosRepository.delete(element);
      });

      const atualizada = await this.agendasRepository.findOne(id);
      
      await this.agendasRepository.delete(atualizada);

      return true;
    }
    
}
