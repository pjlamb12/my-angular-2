import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS} from 'angular2/router';
import {HTTP_BINDINGS} from 'http/http';

import {Home} from './components/home/home';
import {About} from './components/about/about';
import {MyComponent} from './components/my-component/my-component';
import {NamesList} from './services/NameList';
import {MyService} from './services/myService';

@Component({
  selector: 'app',
  viewBindings: [NamesList]
})
@RouteConfig([
  { path: '/', component: Home, as: 'home' },
  { path: '/about', component: About, as: 'about' },
  { path: '/my-component', component: MyComponent, as: 'my-component' }
])
@View({
  templateUrl: './app.html?v=<%= VERSION %>',
  styleUrls: ['./app.css'],
  directives: [ROUTER_DIRECTIVES]
})
class App {}

bootstrap(App, [ROUTER_BINDINGS, HTTP_BINDINGS]);
