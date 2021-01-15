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
  game: any;
  games: Observable<any[]> = [];

  // Inyectar gamesService al constructor & ActivatedRoute (para guardar )
  constructor(private gamesService: GamesService, private activatedRoute: ActivatedRoute) { }

  // Iniciar games en OnInit
  ngOnInit() {
    const params = this.activatedRoute.params;
    this.games = this.gamesService.getGames();
    this.game = this.gamesService.getOneGame(params.id);
  }

}
