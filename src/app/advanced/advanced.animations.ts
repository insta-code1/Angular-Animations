import { animate, trigger, state, style, transition } from '@angular/animations';

export const animateStateTriger = trigger('animateState', [
  transition('* => *', [
    animate(400, style({
      width: 0
    })),
    animate(400, style({
      width: '*'
    }))
  ])
]);

export const showStateTrigger = trigger('showState', [

  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(300)
  ]),
  transition(':leave', animate(300, style({
    opacity: 0
  })))
]);

//   transition('void => *', [
//     style({
//       opacity: 0
//     }),
//     animate(300)
//   ]),
//   transition('* => void', animate(300, style({
//     opacity: 0
//   })))
// ]);
