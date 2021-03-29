import { Guias } from 'src/entities/guias.entity';
import { CreateGuiaDto, FilterGuiasDto } from './dtos/guias.dto';
import { GuiasService } from './guias.service';
export declare class GuiasController {
    private readonly guiasService;
    constructor(guiasService: GuiasService);
    get(id: number): Promise<Guias>;
    findAll(query: FilterGuiasDto): Promise<Guias[]>;
    create(createGuiaDto: CreateGuiaDto): Promise<Guias>;
}
