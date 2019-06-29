import { StarwarService } from './../starwar.service';
import { Component, OnInit, Input } from '@angular/core';
import { People } from '../people';

@Component({
	selector: 'app-people-details',
	templateUrl: './people-details.component.html',
	styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {
	@Input() person: People

	constructor(private starwarService: StarwarService) { }

	ngOnInit() {}

	sendHomeworldURL(url) {
		this.starwarService.getHomeWorldUrl(url)
	}
}
