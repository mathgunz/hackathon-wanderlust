import { MaxLength, IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class EnderecosDto {

    @IsString()
    endereco: string;

    @IsString()
    bairro: string;

    @IsNumber()
    cep: number;

    @IsString()
    complemento: string;

    @IsNumber()
    numero: number;

    @IsString()
    cidade: string;

    @IsString()
    estado: string;
}