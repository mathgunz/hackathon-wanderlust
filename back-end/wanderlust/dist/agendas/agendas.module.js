"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgendasModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const clientes_repository_1 = require("../clientes/clientes.repository");
const guias_repository_1 = require("../guias/guias.repository");
const passeios_repository_1 = require("../passeios/passeios.repository");
const agendas_controller_1 = require("./agendas.controller");
const agendas_repository_1 = require("./agendas.repository");
const agendas_service_1 = require("./agendas.service");
let AgendasModule = class AgendasModule {
};
AgendasModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([agendas_repository_1.AgendasRepository, guias_repository_1.GuiasRepository, passeios_repository_1.PasseiosRepository, clientes_repository_1.ClientesRepository, agendas_repository_1.ClientesAgendadosRepository])],
        controllers: [agendas_controller_1.AgendasController],
        providers: [agendas_service_1.AgendasService]
    })
], AgendasModule);
exports.AgendasModule = AgendasModule;
//# sourceMappingURL=agendas.module.js.map