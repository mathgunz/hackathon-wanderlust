import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateAgendaDto {

    @IsNumber()
    guiaId: number;

    @IsNumber()
    passeioId: number;

    @IsDate()
    data: Date;

    @IsString()
    duracao: string;

    @IsString()
    tipo: string;

    @IsOptional()
    @IsNumber()
    clienteId: number;

    @IsString()
    descricao: string;

    @IsNumber()
    valor: number;
}

export class UpdateAgendaDto extends CreateAgendaDto {}

export class FilterAgendasDto {

    @IsNumber()
    guiaId: number;

}