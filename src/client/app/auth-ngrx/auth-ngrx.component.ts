import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Credentials, User } from './auth-ngrx.model';
import { LoginAction } from './auth-ngrx.actions';

import { State } from '../shared/store';

/**
 * This class represents the lazy loaded NgrxComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-auth-ngrx',
  templateUrl: 'auth-ngrx.component.html',
  styleUrls: ['auth-ngrx.component.css']
})
export class AuthNgrxComponent {

  user$: Observable<User>;
  token$: Observable<string>;

  constructor(
    private store: Store<State>) {

    this.user$ = store.select(s => s.auth.user);
    this.token$ = store.select(s => s.auth.token);
  }

  login(credentials: Credentials) {
    this.store.dispatch(new LoginAction(credentials));
  }
}
