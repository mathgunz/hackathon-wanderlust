import { Guias } from 'src/entities/guias.entity';
import { CreateGuiaDto, FilterGuiasDto } from './dtos/guias.dto';
import { GuiasRepository } from './guias.repository';
export declare class GuiasService {
    private readonly guiasRepository;
    constructor(guiasRepository: GuiasRepository);
    findByEmailAndPassword(email: string, senha: string): Promise<Guias>;
    get(id: number): Promise<Guias>;
    findAll(query: FilterGuiasDto): Promise<Guias[]>;
    create(createGuiaDto: CreateGuiaDto): Promise<Guias>;
}
