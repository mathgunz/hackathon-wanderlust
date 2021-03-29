import { Clientes } from 'src/entities/clientes.entity';
import { Guias } from 'src/entities/guias.entity';
import { LoginDto } from './dtos/login.dto';
import { LoginService } from './login.service';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    cliente(loginDto: LoginDto): Promise<Clientes>;
    guia(loginDto: LoginDto): Promise<Guias>;
}
