import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Guias } from 'src/entities/guias.entity';
import { CreateGuiaDto, FilterGuiasDto } from './dtos/guias.dto';
import { GuiasService } from './guias.service';

@Controller('guias')
export class GuiasController {

    constructor(private readonly guiasService: GuiasService) {}

    @Get('/:id')
    async get(@Param('id') id: number): Promise<Guias> {
      return await this.guiasService.get(id);
    }

    @Get()
    async findAll(@Query() query: FilterGuiasDto): Promise<Guias[]> {

      return await this.guiasService.findAll(query);
    }

    @Post()
    async create(@Body() createGuiaDto: CreateGuiaDto): Promise<Guias> {
      return await this.guiasService.create(createGuiaDto);
    }
}
