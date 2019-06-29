import { StarwarService } from './../starwar.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription }   from 'rxjs';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
	url: string
	planetInfo: any
	constructor(private starwarService: StarwarService) {
		this.url = this.starwarService.homeWorldUrl
	}

	ngOnInit() {
		this.getPlanetInfo()
	}

	async getPlanetInfo() {
		this.planetInfo = await this.starwarService.getPlanet(this.url)
	}
}
