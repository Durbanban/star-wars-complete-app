import { Component, OnInit } from '@angular/core';
import { starShip } from 'src/app/interfaces/starship.interface';
import { StarShipService } from 'src/app/services/star-ship.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

listadoStarShips: starShip[] | undefined;
numPages = 0;
page=0;

  constructor(private starShipService: StarShipService) { }

  ngOnInit(): void {
    this.getStarShipPage(1);
  }

  getStarShipPage(page:number){
    this.starShipService.getStarShip(page).subscribe(resp => {
      this.listadoStarShips = resp.results
      this.numPages = Math.ceil(resp.count /10);
    })
  }
  public getPhotoURL(s: starShip): String {
    return `https://starwars-visualguide.com/assets/img/starships/${
      s.url.split('/')[5]
    }.jpg`;
  }

  contadorPaginas() {
    return new Array(this.numPages);
  }


  }

