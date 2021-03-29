"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientesAgendadosRepository = exports.AgendasRepository = void 0;
const common_1 = require("@nestjs/common");
const agenda_entity_1 = require("../entities/agenda.entity");
const typeorm_1 = require("typeorm");
let AgendasRepository = class AgendasRepository extends typeorm_1.Repository {
};
AgendasRepository = __decorate([
    common_1.Injectable(),
    typeorm_1.EntityRepository(agenda_entity_1.Agendas)
], AgendasRepository);
exports.AgendasRepository = AgendasRepository;
let ClientesAgendadosRepository = class ClientesAgendadosRepository extends typeorm_1.Repository {
};
ClientesAgendadosRepository = __decorate([
    common_1.Injectable(),
    typeorm_1.EntityRepository(agenda_entity_1.ClientesAgendados)
], ClientesAgendadosRepository);
exports.ClientesAgendadosRepository = ClientesAgendadosRepository;
//# sourceMappingURL=agendas.repository.js.map