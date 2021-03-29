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
exports.PasseiosController = void 0;
const common_1 = require("@nestjs/common");
const passeios_entity_1 = require("../entities/passeios.entity");
const passeios_dto_1 = require("./dtos/passeios.dto");
const passeios_service_1 = require("./passeios.service");
let PasseiosController = class PasseiosController {
    constructor(passeiosService) {
        this.passeiosService = passeiosService;
    }
    get(id) {
        return this.passeiosService.get(id);
    }
    async findByFilter(query) {
        return await this.passeiosService.findByFilter(query);
    }
    async create(createPasseioDto, guiaId) {
        return await this.passeiosService.create(createPasseioDto, guiaId);
    }
};
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PasseiosController.prototype, "get", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [passeios_dto_1.FilterPasseios]),
    __metadata("design:returntype", Promise)
], PasseiosController.prototype, "findByFilter", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __param(1, common_1.Query('guiaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [passeios_dto_1.CreatePasseioDto, Number]),
    __metadata("design:returntype", Promise)
], PasseiosController.prototype, "create", null);
PasseiosController = __decorate([
    common_1.Controller('passeios'),
    __metadata("design:paramtypes", [passeios_service_1.PasseiosService])
], PasseiosController);
exports.PasseiosController = PasseiosController;
//# sourceMappingURL=passeios.controller.js.map