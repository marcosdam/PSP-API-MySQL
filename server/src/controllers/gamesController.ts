import {Request, Response} from 'express';
import pool from '../database';

class GamesController{
    // Func borrar 1 juego
    public async deleteGame (req: Request, res: Response){
        const {id} = req.params;
        await pool
            .then((r:any) => r.query('DELETE FROM game WHERE id = ?', [id]));
        res.json({message: 'Juego eliminado'});
    }

    // Func actualizar 1 juego
    public async updateGame (req: Request, res: Response) {
        const {id} = req.params;
        await pool
            .then ((r:any) => r.query('UPDATE game set ? WHERE id = ?', [req.body, id]));
        res.json({message: 'El juego ha sido actualizado'});
    }


    // Func obtener 1 solo juego
    public async getOneGame (req: Request, res: Response){
        const {id} = req.params;
        const game = await pool
            .then ((r:any) => r.query('SELECT * from game where id = ?', [id]));

        if (game.length > 0) return res.json(game[0]);
        res.status(404).json({text: 'El juego no existe'});
    }

    // Func para obtener todos los juegos de la lista
    public async listGames (req: Request, res: Response) {
        const games = await pool
            .then((r:any) =>  r.query('SELECT * from game'));
        res.json(games);
    }

    // Func añadir 1 juego
    public async addGame (req: Request, res: Response){
        await pool
            .then((r:any) => r.query('INSERT INTO game set ?', [req.body]));
        res.json({message: 'Juego guardado'});
    }
}

const gamesController = new GamesController();
export default gamesController;
