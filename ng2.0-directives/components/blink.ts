import { Directive, ElementRef, Renderer} from 'angular2/angular2';
import { } from 'angular2/angular2';

@Directive({
  selector: '[blink]'
})
export class Blink{
  constructor(private _ngEl: ElementRef, private _renderer: Renderer) {
    _renderer.setElementClass(_ngEl, 'blink', true);
  }
}


    