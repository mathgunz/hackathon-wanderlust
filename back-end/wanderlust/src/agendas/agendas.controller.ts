import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

import { Agendas, ClientesAgendados } from 'src/entities/agenda.entity';
import { AgendasService } from './agendas.service';
import { CreateAgendaDto, FilterAgendasDto } from './dtos/agendas.dto';

@Controller('agendas')
export class AgendasController {

    constructor(private readonly agendasService: AgendasService) {}

    @Get('/:id')
    async get(@Param('id') id: number): Promise<Agendas>  {
      return await this.agendasService.get(id);
    }

    @Get()
    async findAll(@Query() query: FilterAgendasDto): Promise<Agendas[]> {
      return await this.agendasService.findAll(query);
    }

    @Post()
    async create(@Body() createAgendaDto: CreateAgendaDto): Promise<Agendas> {
      return await this.agendasService.create(createAgendaDto);    
    }

    @Delete('/:id')
    async delete(@Param('id') id: number): Promise<boolean> {
        return await this.agendasService.delete(id);    
    }

    @Put('/:id/clientes/:clienteId')
    async addCliente(@Param('id') id: number, @Param('clienteId') clienteId: number): Promise<boolean> {
      return await this.agendasService.add(id, clienteId);    
    }
    
    @Put('/:id/clientes/:clienteId/contratar')
    async contratar(@Param('id') id: number, @Param('clienteId') clienteId: number): Promise<boolean> {
      return await this.agendasService.contratar(id, clienteId);    
    }
    
}
