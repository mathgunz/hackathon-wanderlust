import { Guias } from 'src/entities/guias.entity';
import { Repository } from 'typeorm';
import { FilterGuiasDto } from './dtos/guias.dto';
export declare class GuiasRepository extends Repository<Guias> {
    findByEmailAndPassword(email: string, senha: string): Promise<Guias>;
    findByFilter(query: FilterGuiasDto): Promise<Guias[]>;
    findById(guiaId: number): Promise<Guias>;
}
