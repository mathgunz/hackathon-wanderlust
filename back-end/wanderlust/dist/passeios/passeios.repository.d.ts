import { Passeios } from 'src/entities/passeios.entity';
import { Repository } from 'typeorm';
import { FilterPasseios } from './dtos/passeios.dto';
export declare class PasseiosRepository extends Repository<Passeios> {
    findById(id: number): Promise<Passeios>;
    findByFilter(query: FilterPasseios): Promise<Passeios[]>;
}
