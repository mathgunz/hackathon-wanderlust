import { MaxLength, IsNotEmpty, IsString, IsNumber, isEmail, IsEmail, IsOptional, IsDate } from 'class-validator';

export class CreateAgendaDto {

    @IsNumber()
    guiaId: number;

    @IsNumber()
    passeioId: number;

    @IsDate()
    inicio: Date;

    @IsDate()
    fim: Date;

    @IsString()
    status: string;

    @IsString()
    tipo: string;

    @IsOptional()
    @IsNumber()
    clienteId: number;
}

export class UpdateAgendaDto extends CreateAgendaDto {}

export class FilterAgendasDto {

}