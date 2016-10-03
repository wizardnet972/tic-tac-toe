import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import { AuthService } from './auth.service';
import * as fromAuth from './auth-ngrx.actions';

@Injectable()
export class AuthNgrxEffects {
  @Effect() login$ = this.actions$
    .ofType(fromAuth.ActionTypes.LOGIN)
    .switchMap(action => this.auth.login(action.payload)
      .map(loginDetails => new fromAuth.LoginSuccessAction(loginDetails))
      .catch(() => of (new fromAuth.LoginFailedAction())));

  constructor(
    private actions$: Actions,
    private auth: AuthService
  ) { }
}
