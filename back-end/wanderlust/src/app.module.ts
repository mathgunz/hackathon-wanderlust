import { Module } from '@nestjs/common';
import { AgendasModule } from './agendas/agendas.module';
import { ClientesModule } from './clientes/clientes.module';
import { GuiasModule } from './guias/guias.module';
import { PasseiosModule } from './passeios/passeios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginModule } from './login/login.module';

@Module({
  imports: [
    ClientesModule, 
    PasseiosModule, 
    AgendasModule, 
    GuiasModule,
    TypeOrmModule.forRoot(),
    LoginModule
  ]
})
export class AppModule {}
