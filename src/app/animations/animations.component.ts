import { Component, OnInit } from '@angular/core';
import { clickedStateTrigger, numberEnteredTrigger } from './animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [
    clickedStateTrigger,
    numberEnteredTrigger
  ]
})
export class AnimationsComponent {
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
