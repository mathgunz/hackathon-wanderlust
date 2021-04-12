import { MaxLength, IsNotEmpty, IsString, IsNumber, IsOptional, IsDate } from 'class-validator';
import { EnderecosDto } from 'src/clientes/dtos/endereco.dto';

export class CreateGuiaDto {
    
    @IsString()
    nome: string;

    @IsString()
    sobrenome: string;

    @IsDate()
    dataNascimento: Date;

    @IsNumber()
    telefone: number

    @IsString()
    email: string;
    
    @IsString()
    cadastur: string;
    
    @IsNotEmpty()
    endereco: EnderecosDto;

    @IsString()
    senha: string;

    @IsString()
    descricao: string;
}

export class UpdateGuiaDto extends CreateGuiaDto {}

export class FilterGuiasDto {

    @IsString()
    @IsOptional()
    nome: string;

    @IsString()
    @IsOptional()
    sobrenome?: string;

    @IsString()
    @IsOptional()
    email?: string;
    
    @IsString()
    @IsOptional()
    cadastur?: string;
    
    @IsString()
    @IsOptional()
    cidade?: string;

    @IsString()
    @IsOptional()
    estado?: string;

}