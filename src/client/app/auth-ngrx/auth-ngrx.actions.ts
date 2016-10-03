import { Action } from '@ngrx/store';
import { type } from '../shared/util';
import { User } from './auth-ngrx.model';

export const ActionTypes = {
  LOGIN:          type('[Auth] Login'),
  LOGIN_SUCCESS:  type('[Auth] Login Success'),
  LOGIN_FAILED:   type('[Auth] Login Failed'),
};

export class LoginAction implements Action {
  type = ActionTypes.LOGIN;

  constructor(public payload: { username: string, password: string }) { }
}

export class LoginSuccessAction implements Action {
  type = ActionTypes.LOGIN_SUCCESS;

  constructor(public payload: { user: User, token: string }) { }
}

export class LoginFailedAction implements Action {
  type = ActionTypes.LOGIN_FAILED;
}

export type Actions
  = LoginAction
  | LoginSuccessAction
  | LoginFailedAction
  ;
