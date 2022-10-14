import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/interfaces/planet.interface';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

  planetList: Planet[] = [];
  pages = 0;

  constructor(private planetService: PlanetService) { }

  ngOnInit(): void {
  }

  

}
