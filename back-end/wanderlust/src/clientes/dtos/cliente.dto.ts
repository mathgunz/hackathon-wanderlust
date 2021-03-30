import { MaxLength, IsNotEmpty, IsString, IsNumber, isEmail, IsEmail } from 'class-validator';
import { EnderecosDto } from './endereco.dto';

export class CreateClienteDto {
       
    @IsString()
    nome: string;

    @IsString()
    sobrenome: string;

    @IsNumber()
    documento: number;

    @IsNumber()
    telefone: number;

    @IsNotEmpty()
    endereco?: EnderecosDto;

    @IsEmail()
    email: string;

    @IsString()
    senha: string;
}

export class UpdateClienteDto extends CreateClienteDto {}