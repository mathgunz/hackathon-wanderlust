import { Injectable, NotFoundException } from '@nestjs/common';
import { Guias } from 'src/entities/guias.entity';
import { CreateGuiaDto, FilterGuiasDto } from './dtos/guias.dto';
import { GuiasRepository } from './guias.repository';

@Injectable()
export class GuiasService {
    
  constructor(private readonly guiasRepository: GuiasRepository) {}

  async findByEmailAndPassword(email: string, senha: string) {
    return this.guiasRepository.findByEmailAndPassword(email, senha);
  }
  
  async get(id: number): Promise<Guias> {
    const guia = await this.guiasRepository.findById(id);
    if (!guia) {
        throw new NotFoundException(`Guias #${id} not found`);
    }
    return guia;
  }

  async findAll(query:  FilterGuiasDto): Promise<Guias[]> {

    return await this.guiasRepository.findByFilter(query);
  }

  async create(createGuiaDto: CreateGuiaDto): Promise<Guias> {

    const { nome, sobrenome, documento, cadastur, email, endereco, senha, telefone} = createGuiaDto;

    const guia: Guias = {
      nome: nome,
      sobrenome: sobrenome,
      cadastur: cadastur,
      documento: documento,
      email: email,
      senha: senha,
      telefone: telefone,
      endereco:{
        bairro: endereco.bairro,
        cep: endereco.cep,
        endereco: endereco.endereco,
        numero: endereco.numero,
        complemento: endereco.complemento,
        cidade: endereco.cidade,
        estado: endereco.estado
      }

    };
    
    return await this.guiasRepository.save(guia);
  }
}
