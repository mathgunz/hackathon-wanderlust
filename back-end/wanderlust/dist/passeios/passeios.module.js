"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasseiosModule = void 0;
const common_1 = require("@nestjs/common");
const passeios_service_1 = require("./passeios.service");
const passeios_controller_1 = require("./passeios.controller");
const typeorm_1 = require("@nestjs/typeorm");
const passeios_repository_1 = require("./passeios.repository");
const guias_repository_1 = require("../guias/guias.repository");
let PasseiosModule = class PasseiosModule {
};
PasseiosModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([passeios_repository_1.PasseiosRepository, guias_repository_1.GuiasRepository])],
        providers: [passeios_service_1.PasseiosService],
        controllers: [passeios_controller_1.PasseiosController]
    })
], PasseiosModule);
exports.PasseiosModule = PasseiosModule;
//# sourceMappingURL=passeios.module.js.map