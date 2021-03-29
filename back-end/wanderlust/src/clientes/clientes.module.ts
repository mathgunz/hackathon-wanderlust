import { Module } from '@nestjs/common';
import { ClientesController } from './clientes.controller';
import { ClientesRepository } from './clientes.repository';
import { ClientesService } from './clientes.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ClientesRepository])],
  controllers: [ClientesController],
  providers: [ClientesService]
})
export class ClientesModule {}
