import { IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';
import { EnderecosDto } from 'src/clientes/dtos/endereco.dto';

export class CreatePasseioDto {
    
    @IsOptional()
    id: number;
    
    @IsString()
    nome: string;

    @IsString()
    descricao: string;
      
    @IsString()
    duracao: string;

    @IsString()
    tipo: string;

    @IsNotEmpty()
    endereco: EnderecosDto;

    @IsNumber()
    valor: number;
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