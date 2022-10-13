import { Component, OnInit } from '@angular/core';
import { SpeciesService } from 'src/app/services/species.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  constructor(private speciesService: SpeciesService) { }

  ngOnInit(): void {
  }

}
