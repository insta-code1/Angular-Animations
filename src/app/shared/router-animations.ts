import { animate, trigger, state, style, transition } from '@angular/animations';

export const routerFadeStateTrigger = trigger('routerFadeState', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate('2000ms')
  ]),
  transition(':leave', animate('2000ms', style({
    opacity: 0
  })))
]);

export const routerSlideStateTrigger = trigger('routerSlideState', [
  transition(':enter', [
    style({
      transform: 'translateY(-100%)'
    }),
    animate('350ms')
  ]),
  transition(':leave', animate('350ms', style({
    transform: 'translateY(100%)'
  }))
  )
]);