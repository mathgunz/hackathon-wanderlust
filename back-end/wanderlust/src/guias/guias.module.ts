import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuiasRepository } from './guias.repository';
import { GuiasController } from './guias.controller';
import { GuiasService } from './guias.service';

@Module({
  imports: [TypeOrmModule.forFeature([GuiasRepository])],
  controllers: [GuiasController],
  providers: [GuiasService]
})
export class GuiasModule {}
