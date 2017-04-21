import { HostBinding, Component, OnInit } from '@angular/core';
import { routerFadeStateTrigger, routerSlideStateTrigger } from '../shared/router-animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [
    routerFadeStateTrigger,
    routerSlideStateTrigger
  ]
})
export class UsersComponent implements OnInit {
  // @HostBinding('@routerFadeState') routerAnimation = true;
  @HostBinding('@routerSlideState') routerAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
