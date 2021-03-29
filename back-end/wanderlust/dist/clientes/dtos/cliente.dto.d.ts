import { EnderecosDto } from './endereco.dto';
export declare class CreateClienteDto {
    nome: string;
    sobrenome: string;
    documento: number;
    telefone: number;
    endereco?: EnderecosDto;
    email: string;
    senha: string;
}
export declare class UpdateClienteDto extends CreateClienteDto {
}
