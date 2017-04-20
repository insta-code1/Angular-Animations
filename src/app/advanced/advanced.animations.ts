import { animate, group, keyframes, trigger, state, style, transition } from '@angular/animations';

export const animateStateTriger = trigger('animateState', [
  transition('* => *', [
    animate('2000ms cubic-bezier(0,.98,1,.32)', style({
      width: 0
    })),
    animate(400, style({
      width: '*'
    }))
  ])
]);

export const listStateTrigger = trigger('listState', [
  transition(':enter', [
    style({
      opacity: 0,
      backgroundColor: 'white'
    }),
    group([
      animate('1000ms ease-out', style({
        opacity: 0.7
      })),
      animate('500ms', keyframes([
        style({
          backgroundColor: 'white',
          offset:0
        }),
        style({
          backgroundColor: 'red',
          offset:0.6
        }),
        style({
          backgroundColor: 'green',
          offset: 1,
          opacity: 0.7
        })
      ]))
    ]),
    animate('300ms', style({    // last animation settings
      backgroundColor: 'lightblue'
    }))
  ]),
  transition(':leave', animate(300, style({
    opacity: 0
  })))
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
