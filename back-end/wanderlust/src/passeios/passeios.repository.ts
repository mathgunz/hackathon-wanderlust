import { Injectable } from '@nestjs/common';
import { Guias } from 'src/entities/guias.entity';
import { Passeios } from 'src/entities/passeios.entity';
import { Repository, EntityRepository } from 'typeorm';
import { FilterPasseios } from './dtos/passeios.dto';

@Injectable()
@EntityRepository(Passeios)
export class PasseiosRepository extends Repository<Passeios> {

    public async findById(id: number): Promise<Passeios> {
        return await this.findOne(id);
    }

    async findByFilter(query: FilterPasseios): Promise<Passeios[]> {

        const passeios = await this.createQueryBuilder('passeios')
        .leftJoin('passeios.guia', 'guia')
        .leftJoinAndSelect('passeios.endereco', 'endereco')
        .orWhere('guia.id = :guiaIdParameter', {guiaIdParameter: query.guiaId})
        .getMany();
  
        return passeios;
    }
}