import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {MyService} from '../../services/myService';

@Component({
	selector: 'my-component',
	bindings: [MyService]
})
@View({
	templateUrl: './components/my-component/my-component.html',
	directives: [CORE_DIRECTIVES]
})

export class MyComponent{
	counter : number = 0;
	list : any = [];
	item : Object = {name: '', description: ''};
	serverData :any;

	constructor(myService:MyService) {
		this.serverData = myService.getServiceData();
	}

	addOne() {
		this.counter += 1;
	}

	addItem(name, description) {
		this.list.push({name: name.value, description: description.value});
		console.log(this.list);
		name.value = '';
		description.value = '';
	}
}