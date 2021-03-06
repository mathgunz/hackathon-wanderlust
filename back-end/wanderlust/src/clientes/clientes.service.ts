import { Injectable, NotFoundException } from '@nestjs/common';
import { Clientes } from 'src/entities/clientes.entity';
import { Enderecos } from 'src/entities/enderecos.entity';
import { ClientesRepository } from './clientes.repository';
import { CreateClienteDto, UpdateClienteDto } from './dtos/cliente.dto';

@Injectable()
export class ClientesService {

  constructor(private readonly clientesRepository: ClientesRepository) {}

    
  async findByEmailAndPassword(email: string, senha: string): Promise<Clientes> {

    const cliente = await this.clientesRepository.findByEmailAndPassword(email, senha);

    return cliente;
  }

  async update(clienteDto: UpdateClienteDto, id: number): Promise<Clientes> {

    const cliente = await this.clientesRepository.findById(id);
    const { nome } = clienteDto;
    cliente.nome = nome;
    this.clientesRepository.save(cliente);

    return cliente;
  }
  
  async create(clienteDto: CreateClienteDto): Promise<Clientes> {

    const { nome, email, senha, sobrenome, telefone, endereco, dataNascimento } = clienteDto;
    
    const cliente: Clientes = {
        nome: nome,
        email: email,
        senha: senha,
        telefone: telefone,
        sobrenome: sobrenome,
        dataNascimento: dataNascimento,
        endereco: {
          endereco: endereco.endereco,
          cidade: endereco.cidade,
          estado: endereco.estado
        }
    };

    return await this.clientesRepository.save(cliente);
  }

  async get(id: number): Promise<Clientes> {

      const cliente = await this.findOne(id);

      return cliente;
    }

    public async findOne(clienteId: number): Promise<Clientes> {
      const cliente = await this.clientesRepository.findById(clienteId);
      if (!cliente) {
          throw new NotFoundException(`Cliente #${clienteId} not found`);
      }
      return cliente;
  }
}
