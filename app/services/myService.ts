import {Component, View} from 'angular2/angular2';
import { Inject} from 'angular2/di';
import {Http} from 'angular2/http';

var httpMap = new WeakMap<MyService, Http>();

export class MyService {
	serverData: any;

	constructor( http:Http) {
		httpMap.set(this, http);
		http.get('http://localhost:8000/api/achievements/major')
		.map( response => response.json() )
		.subscribe( data => {
			this.serverData = data;
		});
	}

	getServerData() : any {
		return this.serverData;
	}
}