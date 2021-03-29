import { ClientesService } from 'src/clientes/clientes.service';
import { Clientes } from 'src/entities/clientes.entity';
import { Guias } from 'src/entities/guias.entity';
import { GuiasService } from 'src/guias/guias.service';
import { LoginDto } from './dtos/login.dto';
export declare class LoginService {
    private readonly clienteService;
    private readonly guiaService;
    constructor(clienteService: ClientesService, guiaService: GuiasService);
    loginCliente(loginDto: LoginDto): Promise<Clientes>;
    loginGuia(loginDto: LoginDto): Promise<Guias>;
}
