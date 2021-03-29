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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgendasController = void 0;
const common_1 = require("@nestjs/common");
const agenda_entity_1 = require("../entities/agenda.entity");
const agendas_service_1 = require("./agendas.service");
const agendas_dto_1 = require("./dtos/agendas.dto");
let AgendasController = class AgendasController {
    constructor(agendasService) {
        this.agendasService = agendasService;
    }
    async get(id) {
        return await this.agendasService.get(id);
    }
    async create(createAgendaDto) {
        return await this.agendasService.create(createAgendaDto);
    }
    async addCliente(id, clienteId) {
        return await this.agendasService.add(id, clienteId);
    }
};
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AgendasController.prototype, "get", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [agendas_dto_1.CreateAgendaDto]),
    __metadata("design:returntype", Promise)
], AgendasController.prototype, "create", null);
__decorate([
    common_1.Put('/:id/clientes/:clienteId'),
    __param(0, common_1.Param('id')), __param(1, common_1.Param('clienteId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AgendasController.prototype, "addCliente", null);
AgendasController = __decorate([
    common_1.Controller('agendas'),
    __metadata("design:paramtypes", [agendas_service_1.AgendasService])
], AgendasController);
exports.AgendasController = AgendasController;
//# sourceMappingURL=agendas.controller.js.map