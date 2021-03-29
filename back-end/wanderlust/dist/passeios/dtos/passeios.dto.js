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
exports.FilterPasseios = exports.UpdatePasseioDto = exports.CreatePasseioDto = void 0;
const class_validator_1 = require("class-validator");
const endereco_dto_1 = require("../../clientes/dtos/endereco.dto");
class CreatePasseioDto {
}
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], CreatePasseioDto.prototype, "id", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreatePasseioDto.prototype, "nome", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreatePasseioDto.prototype, "descricao", void 0);
__decorate([
    class_validator_1.IsDate(),
    __metadata("design:type", Date)
], CreatePasseioDto.prototype, "inicio", void 0);
__decorate([
    class_validator_1.IsDate(),
    __metadata("design:type", Date)
], CreatePasseioDto.prototype, "fim", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreatePasseioDto.prototype, "duracao", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreatePasseioDto.prototype, "tipo", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", endereco_dto_1.EnderecosDto)
], CreatePasseioDto.prototype, "endereco", void 0);
exports.CreatePasseioDto = CreatePasseioDto;
class UpdatePasseioDto extends CreatePasseioDto {
}
exports.UpdatePasseioDto = UpdatePasseioDto;
class FilterPasseios {
}
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], FilterPasseios.prototype, "guiaId", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterPasseios.prototype, "type", void 0);
exports.FilterPasseios = FilterPasseios;
//# sourceMappingURL=passeios.dto.js.map