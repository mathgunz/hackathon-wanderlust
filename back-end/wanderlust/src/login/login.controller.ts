import { Body, Controller, Post } from '@nestjs/common';
import { Clientes } from 'src/entities/clientes.entity';
import { Guias } from 'src/entities/guias.entity';
import { LoginDto } from './dtos/login.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {

    
    constructor(private readonly loginService: LoginService) {}
    
    @Post('/clientes')
    async cliente(@Body() loginDto: LoginDto): Promise<Clientes> {
        
        const cliente = await this.loginService.loginCliente(loginDto);
        
        return cliente;
    }

    @Post('/guias')
    async guia(@Body() loginDto: LoginDto): Promise<Guias> {
        
        const guias = await this.loginService.loginGuia(loginDto);
        
        return guias;
    }
}
