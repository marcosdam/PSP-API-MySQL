"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    // Func index con Request y Response
    index(req, res) {
        res.send('La API está en /api/games');
    }
}
// Exportar constante IndexController
exports.indexController = new IndexController();
