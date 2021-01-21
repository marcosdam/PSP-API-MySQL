import { Component, OnInit } from '@angular/core';
import {GamesService} from "../../services/games.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  // vars -> (games: será tipo Game (interfaz que crearemos), no any)
  games: any = [];

  // Inyectar gamesService al constructor & ActivatedRoute (para guardar )
  constructor(private gameService: GamesService) { }

  // Iniciar games en OnInit
  ngOnInit() {
    this.getGames();
  }

  // getGames
  getGames() {
    this.gameService.getGames()
      .subscribe(res => {
        this.games = res;
      },
        err => console.error(err))
  }

  deleteGame(id) {
    
  }
}
