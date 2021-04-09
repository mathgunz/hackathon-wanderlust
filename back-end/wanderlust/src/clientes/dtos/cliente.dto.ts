import { MaxLength, IsNotEmpty, IsString, IsNumber, isEmail, IsEmail, IsDate } from 'class-validator';
import { EnderecosDto } from './endereco.dto';

export class CreateClienteDto {
       
    @IsString()
    nome: string;

    @IsString()
    sobrenome: string;

    @IsNumber()
    telefone: number;

    @IsDate()
    dataNascimento: Date;

    @IsNotEmpty()
    endereco?: EnderecosDto;

    @IsEmail()
    email: string;

    @IsString()
    senha: string;
}

export class UpdateClienteDto extends CreateClienteDto {}