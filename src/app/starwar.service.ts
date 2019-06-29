import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  	providedIn: 'root'
})
export class StarwarService {

	url = 'https://swapi.co/api/people';
	homeWorldUrl: string
	
	constructor(private http: HttpClient) {}

	// get all people data from api
	async getPeople() {
		// Start with an empty list
		let people = []
		// Grab the search results
		let response = await fetch('https://swapi.co/api/people/?page=1')
		let data = await response.json()
		people.push(...data['results'])
		// While data['next'] isn't empty, let's download the next page, too
		while(data['next']) {
			response = await fetch(data['next'])
			data = await response.json()
			people.push(...data['results'])
		}
		return people
	}

	getHomeWorldUrl(url) {
		this.homeWorldUrl = url
	}

	async getPlanet(url) {
		let response = await fetch(url)
		let data = await response.json()
		return data
	}
}
