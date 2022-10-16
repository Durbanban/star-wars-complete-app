import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/interfaces/film.interface';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  listadoFilms: Film [] | undefined;
  
  page=0;
  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.getFilm();
  }

  public getFilm(){
    this.filmService.getFilms().subscribe(resp => {
      this.listadoFilms = resp.results;
    })
  }

  public getPhotoURL(f: Film): String {
    return `https://starwars-visualguide.com/assets/img/films/${f.url.split('/')[5]}.jpg`;
  }

}
