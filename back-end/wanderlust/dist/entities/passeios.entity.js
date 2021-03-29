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
exports.Passeios = void 0;
const typeorm_1 = require("typeorm");
const enderecos_entity_1 = require("./enderecos.entity");
const guias_entity_1 = require("./guias.entity");
let Passeios = class Passeios {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Passeios.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Passeios.prototype, "nome", void 0);
__decorate([
    typeorm_1.ManyToOne(type => guias_entity_1.Guias, guias => guias.passeios),
    __metadata("design:type", guias_entity_1.Guias)
], Passeios.prototype, "guia", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Passeios.prototype, "descricao", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Passeios.prototype, "inicio", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Passeios.prototype, "fim", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Passeios.prototype, "duracao", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Passeios.prototype, "tipo", void 0);
__decorate([
    typeorm_1.OneToOne(type => enderecos_entity_1.Enderecos, { cascade: true, eager: true }),
    typeorm_1.JoinColumn({ name: "enderecoId", referencedColumnName: "id" }),
    __metadata("design:type", enderecos_entity_1.Enderecos)
], Passeios.prototype, "endereco", void 0);
Passeios = __decorate([
    typeorm_1.Entity({ schema: 'wanderlust' })
], Passeios);
exports.Passeios = Passeios;
//# sourceMappingURL=passeios.entity.js.map