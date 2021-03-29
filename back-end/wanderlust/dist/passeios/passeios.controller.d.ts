import { Passeios } from 'src/entities/passeios.entity';
import { CreatePasseioDto, FilterPasseios } from './dtos/passeios.dto';
import { PasseiosService } from './passeios.service';
export declare class PasseiosController {
    private readonly passeiosService;
    constructor(passeiosService: PasseiosService);
    get(id: number): Promise<Passeios>;
    findByFilter(query: FilterPasseios): Promise<Passeios[]>;
    create(createPasseioDto: CreatePasseioDto, guiaId: number): Promise<Passeios>;
}
