import { Injectable } from '@nestjs/common';
import { Guias } from 'src/entities/guias.entity';
import { Repository, EntityRepository } from 'typeorm';
import { FilterGuiasDto } from './dtos/guias.dto';

@Injectable()
@EntityRepository(Guias)
export class GuiasRepository extends Repository<Guias> {
    
    async findByEmailAndPassword(email: string, senha: string) {

     const guias = await this.createQueryBuilder('guias')
       .where('email = :emailParameter', {emailParameter: email})
       .andWhere('senha = :senhaParameter', {senhaParameter: senha})
       .getOne();

      return guias;
    }

    async findByFilter(query: FilterGuiasDto): Promise<Guias[]> {

      const guias = await this.createQueryBuilder('guias')
      .leftJoinAndSelect('guias.endereco', 'endereco')
      .orWhere('nome = :nomeParameter', {nomeParameter: query.nome})
      .orWhere('sobrenome = :sobrenomeParameter', {sobrenomeParameter: query.sobrenome})
      .orWhere('email = :emailParameter', {emailParameter: query.email})
      .orWhere('cadastur = :cadasturParameter', {cadasturParameter: query.cadastur})
      .orWhere('endereco.cidade like :cidade', {cidade: `%${query.cidade}%`})
      .orWhere('endereco.estado like :estado', {estado: `%${query.estado}%`})
      .getMany();

      return guias;
    }

    public async findById(guiaId: number): Promise<Guias> {
      return await this.findOne(guiaId);
    }
}