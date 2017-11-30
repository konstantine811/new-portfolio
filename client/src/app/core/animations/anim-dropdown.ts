import {trigger, state, animate, style, transition } from '@angular/core';


export function DropDownAnimation() {
  return trigger('flyInOut', [
    state('in', style({transform: 'translateX(0)'})),
    transition('void => *', [
      style({transform: 'translateY(-30%)'}),
      animate(150)
    ]),
    transition('* => void', [
      animate(100, style({transform: 'translateY(-50%)'}))
    ])
  ])
}
