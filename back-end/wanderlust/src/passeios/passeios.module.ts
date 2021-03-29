import { Module } from '@nestjs/common';
import { PasseiosService } from './passeios.service';
import { PasseiosController } from './passeios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PasseiosRepository } from './passeios.repository';
import { GuiasRepository } from 'src/guias/guias.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PasseiosRepository, GuiasRepository])],
  providers: [PasseiosService],
  controllers: [PasseiosController]
})
export class PasseiosModule {}
