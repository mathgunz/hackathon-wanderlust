import { EnderecosDto } from 'src/clientes/dtos/endereco.dto';
export declare class CreatePasseioDto {
    id: number;
    nome: string;
    descricao: string;
    inicio: Date;
    fim: Date;
    duracao: string;
    tipo: string;
    endereco: EnderecosDto;
}
export declare class UpdatePasseioDto extends CreatePasseioDto {
}
export declare class FilterPasseios {
    guiaId: number;
    type: string;
}
