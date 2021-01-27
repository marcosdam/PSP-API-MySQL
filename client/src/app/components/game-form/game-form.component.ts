import {Component, HostBinding, OnInit} from '@angular/core';
import {Game} from "../../models/game";
import {GamesService} from "../../services/games.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  //
  @HostBinding('class') classes = 'row'

  edit: boolean = false;

  game: Game = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  };

  // Inyectar GameService, Router y ActivatedRoute (coger los parámetros de la url -> donde pasamos el id)
  constructor(private gameService: GamesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  // Detectar si estamos editando o guardando (mediante parámetros)
  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {  //-> (si existe el id, edito, si no, creo nuevo juego)
      this.gameService.getOneGame(params.id)
        .subscribe(res => {
          console.log(res);
          this.game = res;
          this.edit = true;   // Ya podemos editar
        },
          err => console.error(err))
    }
  }

  // Guardar/actualizar juego (si existe o no)
  saveNewGame(){
    delete this.game.created_at;
    delete this.game.id;
    this.gameService.saveGame(this.game)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/games']);
      },
        err => console.error(err)
      )
  }

  // Update
  update(){
    delete this.game.created_at;  // Para actualizar la fecha
    this.gameService.updateGame(this.game.id, this.game)  // id y juego para actualizar
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/games'])
      })
  }

}
