import { MaxLength, IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class EnderecosDto {

    @IsString()
    endereco: string;
  
    @IsString()
    cidade: string;

    @IsString()
    estado?: string;
}