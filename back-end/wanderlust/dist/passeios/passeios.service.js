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
exports.PasseiosService = void 0;
const common_1 = require("@nestjs/common");
const passeios_entity_1 = require("../entities/passeios.entity");
const guias_repository_1 = require("../guias/guias.repository");
const passeios_repository_1 = require("./passeios.repository");
let PasseiosService = class PasseiosService {
    constructor(passeiosRepository, guiasRepository) {
        this.passeiosRepository = passeiosRepository;
        this.guiasRepository = guiasRepository;
    }
    async get(id) {
        return await this.passeiosRepository.findById(id);
    }
    async findByFilter(query) {
        return await this.passeiosRepository.findByFilter(query);
    }
    async create(createPasseioDto, userId) {
        const guia = await this.guiasRepository.findById(userId);
        const { nome, descricao, duracao, endereco, fim, inicio, tipo } = createPasseioDto;
        const passeio = {
            descricao: descricao,
            duracao: duracao,
            fim: fim,
            guia: guia,
            inicio: inicio,
            nome: nome,
            tipo: tipo,
            endereco: {
                bairro: endereco.bairro,
                cep: endereco.cep,
                endereco: endereco.endereco,
                numero: endereco.numero,
                complemento: endereco.complemento,
                cidade: endereco.cidade,
                estado: endereco.estado
            }
        };
        return await this.passeiosRepository.save(passeio);
    }
};
PasseiosService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [passeios_repository_1.PasseiosRepository,
        guias_repository_1.GuiasRepository])
], PasseiosService);
exports.PasseiosService = PasseiosService;
//# sourceMappingURL=passeios.service.js.map