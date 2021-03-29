import { Injectable } from '@nestjs/common';
import { ClientesService } from 'src/clientes/clientes.service';
import { Clientes } from 'src/entities/clientes.entity';
import { Guias } from 'src/entities/guias.entity';
import { GuiasService } from 'src/guias/guias.service';
import { LoginDto } from './dtos/login.dto';

@Injectable()
export class LoginService {
    
    constructor(private readonly clienteService: ClientesService
        , private readonly guiaService: GuiasService
        ){}

    async loginCliente(loginDto: LoginDto): Promise<Clientes> {

        const cliente = await this.clienteService.findByEmailAndPassword(loginDto.email, loginDto.senha);

        return cliente;
    }

    async loginGuia(loginDto: LoginDto): Promise<Guias> {
        const guia = await this.guiaService.findByEmailAndPassword(loginDto.email, loginDto.senha);
        
        return guia;
    }
}
