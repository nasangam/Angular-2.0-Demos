
import {Component, View, bootstrap, Injector,Inject,Injectable,bind} from 'angular2/angular2';
import { NgFor } from 'angular2/angular2';
import {SponsersService} from 'services/sponsers-service';

@Component({
  selector: 'sponsers',
  bindings:[SponsersService]
})

@View({
  template: '<ul><li *ng-for="#item of data">{{item}}</li></ul>',
  directives:[NgFor]
})

export class Sponsers {
  data;
  constructor(@Inject(SponsersService) s) {  
    this.data = s.getData();
  }
}
