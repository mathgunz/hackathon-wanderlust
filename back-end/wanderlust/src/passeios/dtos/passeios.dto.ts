import { MaxLength, IsNotEmpty, IsString, IsDate, IsOptional, IsNumber } from 'class-validator';
import { EnderecosDto } from 'src/clientes/dtos/endereco.dto';

export class CreatePasseioDto {
    
    @IsOptional()
    id: number;
    
    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsString()
    descricao: string;
    
    @IsDate()
    inicio: Date;
    
    @IsDate()
    fim: Date;
    
    @IsString()
    duracao: string;

    @IsString()
    tipo: string;

    @IsNotEmpty()
    endereco: EnderecosDto;
}

export class UpdatePasseioDto extends CreatePasseioDto {}

export class FilterPasseios {
    
    @IsNumber()
    @IsOptional()
    guiaId: number;

    @IsString()
    @IsOptional()
    type: string;
}