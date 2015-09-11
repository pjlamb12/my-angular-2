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
	list : Array = [];
	item : Object = {name: '', description: ''};

	constructor(myService:MyService) {
		// console.log(myService.getServerData());
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