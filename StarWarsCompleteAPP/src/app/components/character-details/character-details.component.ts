import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interfaces/character.interface';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  character!: Character;
  characterFilms: Film[] = []

  constructor(private ruta: ActivatedRoute, private characterService: CharacterService) { }

  ngOnInit(): void {

    this.cargarPersonaje();

  }

  cargarPersonaje() {
    const personajeId = Number(this.ruta.snapshot.paramMap.get('id'));
    this.characterService.getById(personajeId).subscribe(respuesta => {
      this.character = respuesta;
    })


    
  }

  getFotoPersonaje() {
    let id = this.character.url.split("/")[5];
    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
  }

}
