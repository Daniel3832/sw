import { Component, OnInit } from '@angular/core';
import { StarwarService } from '../starwar.service';
import { People } from '../people';

@Component({
	selector: 'app-people-list',
	templateUrl: './people-list.component.html',
	styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

	people: People[]
	selectedPerson: People
	homeWorldUrl: string = ''

	constructor(private starwarService: StarwarService) {}

	ngOnInit() {
		this.getPeople()
	}

	async getPeople() {
		this.people = await this.starwarService.getPeople()
	}

	onPersonSelected(person) {
		this.selectedPerson = person
		this.homeWorldUrl = person.homeworld
	}

	filterPeople(input) {
		this.people = this.people.filter(person => person.name.toLowerCase().indexOf(input.toLowerCase()) > -1)
	}
}
