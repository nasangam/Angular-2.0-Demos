/// <reference path="typings/angular2/angular2.d.ts" />
/// <reference path="typings/angular2/router.d.ts" />

import { Component, Directive,View, bootstrap,bind } from 'angular2/angular2';
import { Router, RouteConfig, RouterOutlet, RouterLink,routerInjectables,LocationStrategy,HashLocationStrategy } from 'angular2/router';
import { Sponsers } from './components/Sponsers';
import { Attendees } from './components/Attendees';

@Component({
  selector: 'my-app'
})

@View({
  templateUrl: './templates/app-template.html' ,
  directives:[RouterLink, RouterOutlet, Sponsers,Attendees]
})

@RouteConfig([
  { path: '/', redirectTo: '/sponsers' },
  { path: '/sponsers', component: Sponsers, as: 'sponsers'},
  { path: '/attendees', component: Attendees, as: 'attendees'}
])

class MyAppComponent{
  constructor() {
  
  }
}

bootstrap(MyAppComponent,[routerInjectables,bind(LocationStrategy).toClass(HashLocationStrategy)]);