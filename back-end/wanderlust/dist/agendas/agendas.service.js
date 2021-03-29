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
exports.AgendasService = void 0;
const common_1 = require("@nestjs/common");
const clientes_repository_1 = require("../clientes/clientes.repository");
const agenda_entity_1 = require("../entities/agenda.entity");
const guias_repository_1 = require("../guias/guias.repository");
const passeios_repository_1 = require("../passeios/passeios.repository");
const agendas_repository_1 = require("./agendas.repository");
let AgendasService = class AgendasService {
    constructor(agendasRepository, guiasRepository, passeiosRepository, clientesRepository, clientesAgendadosRepository) {
        this.agendasRepository = agendasRepository;
        this.guiasRepository = guiasRepository;
        this.passeiosRepository = passeiosRepository;
        this.clientesRepository = clientesRepository;
        this.clientesAgendadosRepository = clientesAgendadosRepository;
    }
    async create(createAgendaDto) {
        const guia = await this.guiasRepository.findOne(createAgendaDto.guiaId);
        const passeio = await this.passeiosRepository.findOne(createAgendaDto.passeioId);
        const agenda = {
            tipo: createAgendaDto.tipo,
            inicio: createAgendaDto.inicio,
            fim: createAgendaDto.fim,
            status: 'Agendado',
            guia: guia,
            passeio: passeio
        };
        return await this.agendasRepository.save(agenda);
    }
    async get(id) {
        return await this.agendasRepository.findOne(id);
    }
    async add(id, clienteId) {
        const agenda = await this.agendasRepository.findOne(id);
        const cliente = await this.clientesRepository.findOne(clienteId);
        const clienteAgendado = {
            agenda: agenda,
            cliente: cliente
        };
        const salvo = (await this.clientesAgendadosRepository.save(clienteAgendado)).id != null;
        return salvo;
    }
};
AgendasService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [agendas_repository_1.AgendasRepository,
        guias_repository_1.GuiasRepository,
        passeios_repository_1.PasseiosRepository,
        clientes_repository_1.ClientesRepository,
        agendas_repository_1.ClientesAgendadosRepository])
], AgendasService);
exports.AgendasService = AgendasService;
//# sourceMappingURL=agendas.service.js.map