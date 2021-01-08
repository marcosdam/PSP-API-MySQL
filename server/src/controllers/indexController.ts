import { Request, Response } from "express";

class IndexController{
    // Func index con Request y Response
    public index(req: Request, res: Response){
        res.send('La API está en /api/games');
    }
}
// Exportar constante IndexController
export const indexController = new IndexController();
