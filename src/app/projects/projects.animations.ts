import { keyframes, trigger, state, style, transition, animate } from '@angular/animations'

export const markedTrigger = trigger('markedState', [
  state('default', style({
    backgroundColor: 'transparent',
    border: '1px solid black',
    padding: '20px'
  })),
  state('marked', style({
    border: '2px solid blue',
    backgroundColor: '#caeff9',
    padding: '19px'
  })),
  transition('default => marked', [
    style({
      border: '2px solid black',
      padding: '19px',
      transform: 'scale(1)'
    }),
    animate('300ms ease-in', style({
      transform: 'scale(1.05)'
    })),
    animate('200ms')
  ]),
  transition('marked => default', [
    style({
      border: '1px solid blue',
      padding: '20px'
    }),
    animate('300ms ease-out'),
  ])
]);

export const itemStateTrigger = trigger('itemState', [
  transition(':enter', [
    animate('600ms ease-in', keyframes([
      style({
        opacity: 0,
        transform: 'translateX(-100%)',
        offest: 0
      }),
      style({
        opacity: 1,
        transform: 'translateX(12%)',
        offest: 0.4
      }),
      style({
        opacity: 1,
        transform: 'translateX(0)',
        offset: 1
      })
    ]))
  ]),
  transition(':leave', [
    animate('500ms ease-in', keyframes([
      style({
        opacity: 1,
        transform: 'translateX(0)'
      }),
      style({
        opacity: 1,
        transform: 'translateX(-12%)'
      }),
      style({
        opacity: 0,
        transform: 'translateX(100%)'
      })
    ]))
  ]),
  transition('slideUp => slideDown', [    // used for sliding elements up & down when the create project and cancel butten in triggered
    style({
      transform: 'translateY(-100%)'
    }),
    animate('300ms ease-out', style({
      transform: 'translateY(0)'
    }))
  ]),
  transition('slideDown => slideUp', [    // used for sliding elements up & down when the create project and cancel butten in triggered
    animate('300ms ease-out', style({
      transform: 'translateY(-100%)'
    }))
  ])
]);

export const slideStateTrigger = trigger('slideState', [
  transition(':enter', [
    style({
      transform: 'translateY(-100%)'
    }),
    animate('300ms ease-out', style({
      transform: 'translateY(0)'
    }))
  ]),
  transition(':leave', [
    animate('300ms ease-out', style({
      transform: 'translateY(-100%)'
    }))
  ]),
]);

























/* ===================================================
          Nice simple slide in animation
   =====================================================

export const itemStateTrigger = trigger('itemState', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(-100%)'
    }),
    animate('500ms ease-out', style({
      opacity: 1,
      transform: 'translateX(0)'
    }))
  ]),
  transition(':leave', [
    animate('500ms ease-in', style({
      opacity: 0,
      transform: 'translateX(100%)'
    }))
  ])
]);

*/