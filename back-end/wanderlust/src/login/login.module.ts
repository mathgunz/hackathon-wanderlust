import { Module } from '@nestjs/common';
import { ClientesRepository } from 'src/clientes/clientes.repository';
import { ClientesService } from 'src/clientes/clientes.service';
import { GuiasRepository } from 'src/guias/guias.repository';
import { GuiasService } from 'src/guias/guias.service';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

@Module({
  controllers: [LoginController],
  providers: [LoginService, 
    ClientesService, 
    ClientesRepository, 
    GuiasService, 
    GuiasRepository]
})
export class LoginModule {}
