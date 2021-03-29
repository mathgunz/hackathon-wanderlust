import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Passeios } from 'src/entities/passeios.entity';
import { CreatePasseioDto, FilterPasseios } from './dtos/passeios.dto';
import { PasseiosService } from './passeios.service';

@Controller('passeios')
export class PasseiosController {

    constructor(private readonly passeiosService: PasseiosService) {}

    @Get('/:id')
    get(@Param('id') id: number): Promise<Passeios> {
      return this.passeiosService.get(id);
    }

    @Get()
    async findByFilter(@Query() query: FilterPasseios): Promise<Passeios[]> {
      return await this.passeiosService.findByFilter(query);
    }

    @Post()
    async create(@Body() createPasseioDto: CreatePasseioDto
               , @Query('guiaId') guiaId: number): Promise<Passeios> {
      return await this.passeiosService.create(createPasseioDto, guiaId);            
    }
}
