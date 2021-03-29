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
exports.Guias = void 0;
const typeorm_1 = require("typeorm");
const enderecos_entity_1 = require("./enderecos.entity");
const passeios_entity_1 = require("./passeios.entity");
let Guias = class Guias {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Guias.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Guias.prototype, "nome", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Guias.prototype, "sobrenome", void 0);
__decorate([
    typeorm_1.Column("int8"),
    __metadata("design:type", Number)
], Guias.prototype, "documento", void 0);
__decorate([
    typeorm_1.Column("int8"),
    __metadata("design:type", Number)
], Guias.prototype, "telefone", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Guias.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Guias.prototype, "cadastur", void 0);
__decorate([
    typeorm_1.OneToOne(type => enderecos_entity_1.Enderecos, { cascade: true, eager: true }),
    typeorm_1.JoinColumn({ name: "enderecoId", referencedColumnName: "id" }),
    __metadata("design:type", enderecos_entity_1.Enderecos)
], Guias.prototype, "endereco", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Guias.prototype, "senha", void 0);
__decorate([
    typeorm_1.OneToMany(type => passeios_entity_1.Passeios, passeios => passeios.guia),
    __metadata("design:type", Array)
], Guias.prototype, "passeios", void 0);
Guias = __decorate([
    typeorm_1.Entity({ schema: 'wanderlust' })
], Guias);
exports.Guias = Guias;
//# sourceMappingURL=guias.entity.js.map