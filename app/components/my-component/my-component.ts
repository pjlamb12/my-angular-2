import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
	selector: 'my-component'
})
@View({
	templateUrl: './components/my-component/my-component.html',
	directives: [CORE_DIRECTIVES]
})

export class MyComponent{
	counter : number = 0;
	list : Array = [];
	item : Object = {name: '', description: ''};

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