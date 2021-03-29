"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuiasRepository = void 0;
const common_1 = require("@nestjs/common");
const guias_entity_1 = require("../entities/guias.entity");
const typeorm_1 = require("typeorm");
let GuiasRepository = class GuiasRepository extends typeorm_1.Repository {
    async findByEmailAndPassword(email, senha) {
        const guias = await this.createQueryBuilder('guias')
            .where('email = :emailParameter', { emailParameter: email })
            .andWhere('senha = :senhaParameter', { senhaParameter: senha })
            .getOne();
        return guias;
    }
    async findByFilter(query) {
        const guias = await this.createQueryBuilder('guias')
            .orWhere('nome = :nomeParameter', { nomeParameter: query.nome })
            .orWhere('sobrenome = :sobrenomeParameter', { sobrenomeParameter: query.sobrenome })
            .orWhere('email = :emailParameter', { emailParameter: query.email })
            .orWhere('cadastur = :cadasturParameter', { cadasturParameter: query.cadastur })
            .getMany();
        return guias;
    }
    async findById(guiaId) {
        return await this.findOne(guiaId);
    }
};
GuiasRepository = __decorate([
    common_1.Injectable(),
    typeorm_1.EntityRepository(guias_entity_1.Guias)
], GuiasRepository);
exports.GuiasRepository = GuiasRepository;
//# sourceMappingURL=guias.repository.js.map