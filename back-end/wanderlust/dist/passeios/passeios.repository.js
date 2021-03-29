"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasseiosRepository = void 0;
const common_1 = require("@nestjs/common");
const guias_entity_1 = require("../entities/guias.entity");
const passeios_entity_1 = require("../entities/passeios.entity");
const typeorm_1 = require("typeorm");
let PasseiosRepository = class PasseiosRepository extends typeorm_1.Repository {
    async findById(id) {
        return await this.findOne(id);
    }
    async findByFilter(query) {
        const passeios = await this.createQueryBuilder('passeios')
            .leftJoin('passeios.guia', 'guia')
            .leftJoinAndSelect('passeios.endereco', 'endereco')
            .orWhere('guia.id = :guiaIdParameter', { guiaIdParameter: query.guiaId })
            .getMany();
        return passeios;
    }
};
PasseiosRepository = __decorate([
    common_1.Injectable(),
    typeorm_1.EntityRepository(passeios_entity_1.Passeios)
], PasseiosRepository);
exports.PasseiosRepository = PasseiosRepository;
//# sourceMappingURL=passeios.repository.js.map