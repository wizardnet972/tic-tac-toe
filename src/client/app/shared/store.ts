import { compose } from '@ngrx/core/compose';
import { storeLogger } from 'ngrx-store-logger';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

import * as fromRouter from '@ngrx/router-store';
import * as fromAuth from '../auth-ngrx/index';

export interface State {
  auth: fromAuth.State;
  router: fromRouter.RouterState;
}

const reducers = {
  auth: fromAuth.reducer,
  router: fromRouter.routerReducer,
};

const developmentReducer = compose(storeFreeze, storeLogger(), combineReducers)(reducers);
const productionReducer = combineReducers(reducers);

export function rootReducer(state: any, action: any) {
  if (String('<%= ENV %>') === 'prod') {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

// Reset Store: http://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store
export const reducer = (state: any, action: any) => {
  if (action.type === 'RESET_STORE') {
    state = undefined;
  }

  return rootReducer(state, action);
};
