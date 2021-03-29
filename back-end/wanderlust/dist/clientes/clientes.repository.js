"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientesRepository = void 0;
const common_1 = require("@nestjs/common");
const clientes_entity_1 = require("../entities/clientes.entity");
const typeorm_1 = require("typeorm");
let ClientesRepository = class ClientesRepository extends typeorm_1.Repository {
    async findByEmailAndPassword(email, senha) {
        const cliente = await this.createQueryBuilder('clientes')
            .where('email = :emailParameter', { emailParameter: email })
            .andWhere('senha = :senhaParameter', { senhaParameter: senha })
            .getOne();
        return cliente;
    }
    async findById(clienteId) {
        return await this.findOne(clienteId);
    }
};
ClientesRepository = __decorate([
    common_1.Injectable(),
    typeorm_1.EntityRepository(clientes_entity_1.Clientes)
], ClientesRepository);
exports.ClientesRepository = ClientesRepository;
//# sourceMappingURL=clientes.repository.js.map