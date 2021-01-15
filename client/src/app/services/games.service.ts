import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  // Dirección de la Api games
  URI = 'localhost:3000/api/games';

  // Traer al constructor el HTTPClient
  constructor(private http: HttpClient) { }

  // Func getGames para obtener todos los juegos
  getGames(){
    return this.http.get<any[]>(this.URI);
  }

  // FUNCS -> El resto necesitan el id del juego
  getOneGame(id: String){
    return this.http.get(`${this.URI}/${id}`);
  }
}
