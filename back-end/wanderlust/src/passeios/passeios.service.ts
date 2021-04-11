import { Injectable } from '@nestjs/common';
import { Passeios } from 'src/entities/passeios.entity';
import { GuiasRepository } from 'src/guias/guias.repository';
import { CreatePasseioDto, FilterPasseios } from './dtos/passeios.dto';
import { PasseiosRepository } from './passeios.repository';

@Injectable()
export class PasseiosService {

    constructor(private readonly passeiosRepository: PasseiosRepository
        , private readonly guiasRepository: GuiasRepository) {}

    async get(id: number): Promise<Passeios> {
        return await this.passeiosRepository.findById(id);
    }

    async findByFilter(query: FilterPasseios): Promise<Passeios[]> {
        return await this.passeiosRepository.findByFilter(query);
    }

    async create(createPasseioDto: CreatePasseioDto, userId: number): Promise<Passeios> {

        const guia = await this.guiasRepository.findById(userId);

        const { nome, descricao, duracao, endereco, tipo } = createPasseioDto;
        
        const passeio: Passeios = {
            descricao: descricao,
            duracao: duracao,
            guia: guia,
            nome: nome,
            tipo: tipo,
            endereco: {
                endereco: endereco.endereco,
                cidade: endereco.cidade,
                estado: endereco.estado
            }
        }

        return await this.passeiosRepository.save(passeio);
    }
}
