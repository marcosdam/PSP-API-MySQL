"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesController_1 = __importDefault(require("../controllers/gamesController"));
class GamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    // Config con rutas declaradas
    config() {
        // GET
        this.router.get('/', gamesController_1.default.list);
        this.router.get('/:id', gamesController_1.default.getOne);
        // POST
        this.router.post('/', gamesController_1.default.create);
        // DELETE
        this.router.delete('/:id', gamesController_1.default.delete);
        // UPDATE
        this.router.put('/:id', gamesController_1.default.update);
    }
}
// Const gamesRoutes
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
