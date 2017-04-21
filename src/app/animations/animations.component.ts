import { Component, HostBinding,OnInit } from '@angular/core';
import { clickedStateTrigger, numberEnteredTrigger } from './animations';
import { routerFadeStateTrigger, routerSlideStateTrigger } from '../shared/router-animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [
    clickedStateTrigger,
    numberEnteredTrigger,
    routerFadeStateTrigger,
    routerSlideStateTrigger
  ]
})
export class AnimationsComponent {
  // @HostBinding('@routerFadeState') routerAnimation = true;
  @HostBinding('@routerSlideState') routerAnimation = true;
  
  clickInfo = 'default';
  paragraphClick = 'default';
  numberEntered;

  onClickSimple() {
    this.clickInfo = 'clicked';
    setTimeout(() => {
      this.clickInfo = 'default';
    }, 3000);
  }
}
