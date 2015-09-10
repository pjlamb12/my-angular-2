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

	addOne() {
		this.counter += 1;
	}
}