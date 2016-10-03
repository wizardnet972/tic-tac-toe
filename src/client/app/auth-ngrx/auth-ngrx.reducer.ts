import * as fromAuth from './auth-ngrx.actions';
import { User } from './auth-ngrx.model';

export interface State {
  token: string | null;
  user: User | null;
};

const initialState: State = {
  token: null,
  user: null,
};

export function reducer(state = initialState, action: fromAuth.Actions): State {

  switch (action.type) {

    case fromAuth.ActionTypes.LOGIN_SUCCESS: {

      let loginDetails = action.payload;

      return Object.assign({}, state, loginDetails);
    }

    case fromAuth.ActionTypes.LOGIN_FAILED: {

      return Object.assign({}, state, {
        user: null,
        token: null
      });
    }

    default: {
      return state;
    }
  }
}
