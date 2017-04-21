import { HostBinding, Component, OnInit } from '@angular/core';
import { animateStateTriger, listStateTrigger, showStateTrigger } from './advanced.animations';
import { routerFadeStateTrigger, routerSlideStateTrigger } from '../shared/router-animations';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.css'],
  animations: [
    animateStateTriger,
    listStateTrigger,
    showStateTrigger,
    routerFadeStateTrigger,
    routerSlideStateTrigger
  ]
})
export class AdvancedComponent {
  // @HostBinding('@routerFadeState') routerAnimation = true;
  @HostBinding('@routerSlideState') routerAnimation = true;


  isShown: Boolean = false;
  width: Number = 400;
  animate: Boolean = false;
  testResults: Array<Number> = [];

  onAddElement() {
    this.testResults.push(Math.random());
  }

  onDeleteElement(){
    this.testResults.pop();
  }

  onAnimationStarted(event: AnimationEvent) {
    console.log(event);
  }

  onAnimationDone(event: AnimationEvent) {
    console.log(event);
  }
}
