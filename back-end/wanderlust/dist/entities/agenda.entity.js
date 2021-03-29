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
exports.ClientesAgendados = exports.Agendas = void 0;
const typeorm_1 = require("typeorm");
const clientes_entity_1 = require("./clientes.entity");
const guias_entity_1 = require("./guias.entity");
const passeios_entity_1 = require("./passeios.entity");
let Agendas = class Agendas {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Agendas.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => guias_entity_1.Guias),
    typeorm_1.JoinColumn({ name: 'guias_id', referencedColumnName: 'id' }),
    __metadata("design:type", guias_entity_1.Guias)
], Agendas.prototype, "guia", void 0);
__decorate([
    typeorm_1.ManyToOne(type => passeios_entity_1.Passeios),
    typeorm_1.JoinColumn({ name: 'passeios_id', referencedColumnName: 'id' }),
    __metadata("design:type", passeios_entity_1.Passeios)
], Agendas.prototype, "passeio", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Agendas.prototype, "inicio", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Agendas.prototype, "fim", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Agendas.prototype, "status", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Agendas.prototype, "tipo", void 0);
__decorate([
    typeorm_1.OneToMany(type => ClientesAgendados, clientesAgendados => clientesAgendados.agenda),
    __metadata("design:type", Array)
], Agendas.prototype, "clientesAgendados", void 0);
Agendas = __decorate([
    typeorm_1.Entity({ schema: 'wanderlust' })
], Agendas);
exports.Agendas = Agendas;
let ClientesAgendados = class ClientesAgendados {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ClientesAgendados.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Agendas),
    typeorm_1.JoinColumn({ name: 'agendas_id', referencedColumnName: 'id' }),
    __metadata("design:type", Agendas)
], ClientesAgendados.prototype, "agenda", void 0);
__decorate([
    typeorm_1.ManyToOne(type => clientes_entity_1.Clientes),
    typeorm_1.JoinColumn({ name: 'clientes_id', referencedColumnName: 'id' }),
    __metadata("design:type", clientes_entity_1.Clientes)
], ClientesAgendados.prototype, "cliente", void 0);
ClientesAgendados = __decorate([
    typeorm_1.Entity({ schema: 'wanderlust' })
], ClientesAgendados);
exports.ClientesAgendados = ClientesAgendados;
//# sourceMappingURL=agenda.entity.js.map