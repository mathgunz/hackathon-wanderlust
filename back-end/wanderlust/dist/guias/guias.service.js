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
exports.GuiasService = void 0;
const common_1 = require("@nestjs/common");
const guias_entity_1 = require("../entities/guias.entity");
const guias_repository_1 = require("./guias.repository");
let GuiasService = class GuiasService {
    constructor(guiasRepository) {
        this.guiasRepository = guiasRepository;
    }
    async findByEmailAndPassword(email, senha) {
        return this.guiasRepository.findByEmailAndPassword(email, senha);
    }
    async get(id) {
        const guia = await this.guiasRepository.findById(id);
        if (!guia) {
            throw new common_1.NotFoundException(`Guias #${id} not found`);
        }
        return guia;
    }
    async findAll(query) {
        return await this.guiasRepository.findByFilter(query);
    }
    async create(createGuiaDto) {
        const { nome, sobrenome, documento, cadastur, email, endereco, senha, telefone } = createGuiaDto;
        const guia = {
            nome: nome,
            sobrenome: sobrenome,
            cadastur: cadastur,
            documento: documento,
            email: email,
            senha: senha,
            telefone: telefone,
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
        return await this.guiasRepository.save(guia);
    }
};
GuiasService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [guias_repository_1.GuiasRepository])
], GuiasService);
exports.GuiasService = GuiasService;
//# sourceMappingURL=guias.service.js.map