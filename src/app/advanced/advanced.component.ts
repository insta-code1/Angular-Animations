import { Component, OnInit } from '@angular/core';
import { animateStateTriger, showStateTrigger } from './advanced.animations';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.css'],
  animations: [
    showStateTrigger,
    animateStateTriger
  ]
})
export class AdvancedComponent {
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
}
