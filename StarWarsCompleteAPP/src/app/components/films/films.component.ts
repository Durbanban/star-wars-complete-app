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
  numPages = 0;
  page=0;
  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.getFilmPage(1);
  }

  public getFilmPage(page: number){
    this.filmService.getFilms(page).subscribe(resp => {
      this.listadoFilms = resp.results;
      this.numPages = Math.ceil(resp.count /10);

    })
  }

  public getPhotoURL(f: Film): String {
    return `https://starwars-visualguide.com/assets/img/films/${f.url.split('/')[5]}.jpg`;
  }

  contadorPaginas(){
    return Array(this.numPages)
  }
}
