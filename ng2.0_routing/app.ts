/// <reference path="typings/angular2/angular2.d.ts" />
/// <reference path="typings/angular2/router.d.ts" />

import { Component, View, bootstrap,bind } from 'angular2/angular2';
import { Router, RouteConfig, RouterOutlet, RouterLink,routerInjectables,httpInjectables,LocationStrategy,HashLocationStrategy } from 'angular2/router';
import { Sponsers } from './components/Sponsers';
import { Attendees } from './components/Attendees';

@Component({
  selector: 'my-app'
})

@View({
  template: '<h1> JS Channle Bangalore ..!!!</h1>   <router-outlet></router-outlet> <br><a  [router-link]="[\'/attendees\']" router-params="">attendees</a> &nbsp | &nbsp <a [router-link]="[\'/sponsers\']" router-params="">sponsers</a>',
  directives:[RouterLink, RouterOutlet, Sponsers,Attendees]
})

@RouteConfig([
  { path: '/',       redirectTo: '/sponsers' },
  { path: '/sponsers', component: Sponsers, as: 'sponsers'},
  { path: '/attendees', component: Attendees, as: 'attendees'}
])

class MyAppComponent{
  constructor() {
  
  }
}

bootstrap(MyAppComponent,[routerInjectables,bind(LocationStrategy).toClass(HashLocationStrategy)]);