"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const clientes_service_1 = require("../clientes/clientes.service");
const clientes_entity_1 = require("../entities/clientes.entity");
const guias_entity_1 = require("../entities/guias.entity");
const guias_service_1 = require("../guias/guias.service");
let LoginService = class LoginService {
    constructor(clienteService, guiaService) {
        this.clienteService = clienteService;
        this.guiaService = guiaService;
    }
    async loginCliente(loginDto) {
        const cliente = await this.clienteService.findByEmailAndPassword(loginDto.email, loginDto.senha);
        return cliente;
    }
    async loginGuia(loginDto) {
        const guia = await this.guiaService.findByEmailAndPassword(loginDto.email, loginDto.senha);
        return guia;
    }
};
LoginService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [clientes_service_1.ClientesService,
        guias_service_1.GuiasService])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map