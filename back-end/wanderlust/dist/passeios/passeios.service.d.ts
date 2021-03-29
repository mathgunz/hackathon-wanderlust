import { Passeios } from 'src/entities/passeios.entity';
import { GuiasRepository } from 'src/guias/guias.repository';
import { CreatePasseioDto, FilterPasseios } from './dtos/passeios.dto';
import { PasseiosRepository } from './passeios.repository';
export declare class PasseiosService {
    private readonly passeiosRepository;
    private readonly guiasRepository;
    constructor(passeiosRepository: PasseiosRepository, guiasRepository: GuiasRepository);
    get(id: number): Promise<Passeios>;
    findByFilter(query: FilterPasseios): Promise<Passeios[]>;
    create(createPasseioDto: CreatePasseioDto, userId: number): Promise<Passeios>;
}
