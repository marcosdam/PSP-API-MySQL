import { Router } from "express";
import gamesController from '../controllers/gamesController';

class GamesRoutes{
    public router: Router = Router();
    constructor() {
        this.config();
    }

    // Config con rutas declaradas
    config():void {
        // GET
        this.router.get('/', gamesController.list);
        this.router.get('/:id', gamesController.getOne);
        // POST
        this.router.post('/',gamesController.create);
        // DELETE
        this.router.delete('/:id', gamesController.delete);
        // UPDATE
        this.router.put('/:id', gamesController.update);
    }
}

// Const gamesRoutes
const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;
