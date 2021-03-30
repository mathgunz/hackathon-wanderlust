import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesRepository } from 'src/clientes/clientes.repository';
import { GuiasRepository } from 'src/guias/guias.repository';
import { PasseiosRepository } from 'src/passeios/passeios.repository';
import { AgendasController } from './agendas.controller';
import { AgendasRepository, ClientesAgendadosRepository } from './agendas.repository';
import { AgendasService } from './agendas.service';

@Module({
  imports: [TypeOrmModule.forFeature([AgendasRepository, GuiasRepository, PasseiosRepository, ClientesRepository, ClientesAgendadosRepository])],
  controllers: [AgendasController],
  providers: [AgendasService]
})
export class AgendasModule {}
