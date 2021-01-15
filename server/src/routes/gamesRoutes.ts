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
        this.router.get('/', gamesController.listGames);
        // GET ONE
        this.router.get('/:id', gamesController.getOneGame);
        // POST
        this.router.post('/',gamesController.addGame);
        // DELETE
        this.router.delete('/:id', gamesController.deleteGame);
        // UPDATE
        this.router.put('/:id', gamesController.updateGame);
    }
}

// Const gamesRoutes
const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;
