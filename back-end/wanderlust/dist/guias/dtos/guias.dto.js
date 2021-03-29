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
exports.FilterGuiasDto = exports.UpdateGuiaDto = exports.CreateGuiaDto = void 0;
const class_validator_1 = require("class-validator");
const endereco_dto_1 = require("../../clientes/dtos/endereco.dto");
class CreateGuiaDto {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateGuiaDto.prototype, "nome", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateGuiaDto.prototype, "sobrenome", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateGuiaDto.prototype, "documento", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateGuiaDto.prototype, "telefone", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateGuiaDto.prototype, "email", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateGuiaDto.prototype, "cadastur", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", endereco_dto_1.EnderecosDto)
], CreateGuiaDto.prototype, "endereco", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateGuiaDto.prototype, "senha", void 0);
exports.CreateGuiaDto = CreateGuiaDto;
class UpdateGuiaDto extends CreateGuiaDto {
}
exports.UpdateGuiaDto = UpdateGuiaDto;
class FilterGuiasDto {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterGuiasDto.prototype, "nome", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterGuiasDto.prototype, "sobrenome", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterGuiasDto.prototype, "email", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterGuiasDto.prototype, "cadastur", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterGuiasDto.prototype, "cidade", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], FilterGuiasDto.prototype, "estado", void 0);
exports.FilterGuiasDto = FilterGuiasDto;
//# sourceMappingURL=guias.dto.js.map