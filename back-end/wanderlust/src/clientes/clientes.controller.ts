import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Clientes } from 'src/entities/clientes.entity';
import { ClientesService } from './clientes.service';
import { CreateClienteDto, UpdateClienteDto } from './dtos/cliente.dto';

@Controller('clientes')
export class ClientesController {

    constructor(private readonly clientesService: ClientesService) {}

    @Get('/:id')
    async get(@Param('id') id: number): Promise<Clientes> {
      return await this.clientesService.get(id);
    }

    @Post()
    async create(@Body() cliente: CreateClienteDto): Promise<Clientes>{
      return await this.clientesService.create(cliente);
    }

    @Put('/:id')
    async update(@Body() clienteDto: UpdateClienteDto, @Param('id') id: number): Promise<Clientes> {
      return await this.clientesService.update(clienteDto, id);   
    }
}