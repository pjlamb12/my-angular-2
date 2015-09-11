import {Component, View} from 'angular2/angular2';

export class MyService {
	serviceData : any = 'Hello there from the service!';
	constructor() {

	}

	getServiceData() : any {
		return this.serviceData;
	}
}