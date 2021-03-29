import { EnderecosDto } from 'src/clientes/dtos/endereco.dto';
export declare class CreateGuiaDto {
    nome: string;
    sobrenome: string;
    documento: number;
    telefone: number;
    email: string;
    cadastur: string;
    endereco: EnderecosDto;
    senha: string;
}
export declare class UpdateGuiaDto extends CreateGuiaDto {
}
export declare class FilterGuiasDto {
    nome: string;
    sobrenome?: string;
    email?: string;
    cadastur?: string;
    cidade?: string;
    estado?: string;
}
