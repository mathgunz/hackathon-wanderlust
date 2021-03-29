export declare class CreateAgendaDto {
    guiaId: number;
    passeioId: number;
    inicio: Date;
    fim: Date;
    status: string;
    tipo: string;
}
export declare class UpdateAgendaDto extends CreateAgendaDto {
}
