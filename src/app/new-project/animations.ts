import { animate, group, trigger, transition, style, state } from '@angular/animations';
export const buttonStateTrigger = trigger('buttonState', [
  state('valid', style({
    backgroundColor: 'lightgreen',
    borderColor: 'green',
    color: 'green'
  })),
  state('invalid', style({
    backgroundColor: 'red',
    borderColor: 'darkred',
    color: 'white'
  })),
  transition('invalid => valid', [
    group([
      animate('100ms', style({
        transform: 'scale(1.1)'
      })),
      animate('200ms', style({
        backgroundColor: 'lightgreen'
      }))
    ]),
    animate('200ms', style({
      transform: 'scale(1)'
    }))
  ]),
  transition('valid => invalid', [
    group([
      animate('100ms', style({
        transform: 'scale(1.1)'
      })),
      animate('200ms', style({
        backgroundColor: 'red',
         borderColor: 'darkred',
        color: 'white'
      }))
    ]),
    animate('200ms', style({
      transform: 'scale(1)'
    }))
  ])
]);