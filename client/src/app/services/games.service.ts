import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Game} from "../models/game";

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  // Dirección de la Api games
  API_URI = 'http://localhost:3000/api/games';

  // Traer al constructor el HTTPClient
  constructor(private http: HttpClient) { }

  // Func getGames para obtener todos los juegos
  getGames(){
    return this.http.get(this.API_URI);
  }

  // FUNCS -> El resto necesitan el id del juego

  // GET (getOneGame)
  getOneGame(id: string){
    return this.http.get(`${this.API_URI}/${id}`);
  }

  // POST (saveGame)
  saveGame(game: Game){
    return this.http.post(this.API_URI, game);
  }

  // UPDATE (updateGame)
  updateGame(id: string|number, updatedGame: Game){
    return this.http.put(`${this.API_URI}/${id}`, updatedGame);
  }

  // DELETE (deleteGame)
  deleteGame(id: string|number){
    return this.http.delete(`${this.API_URI}/${id}`);
  }
}
