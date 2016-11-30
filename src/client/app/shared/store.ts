import { compose } from '@ngrx/core/compose';
import { storeLogger } from 'ngrx-store-logger';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

import * as fromRouter from '@ngrx/router-store';
import * as fromApp from '../app.store';

export interface State extends fromApp.State {
  router: fromRouter.RouterState;
}

const reducers = Object.assign({}, fromApp.reducers, {
  router: fromRouter.routerReducer,
});

const developmentReducer = compose(storeFreeze, storeLogger(), combineReducers)(reducers);
const productionReducer = combineReducers(reducers);

export function rootReducer(state: any, action: any) {
  if (String('<%= BUILD_TYPE %>') === 'prod') {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

// Reset Store: http://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store
export const reducer = (state: any, action: any) => {
  // Bug: https://github.com/ngrx/router-store/issues/26
  let oldRouter: fromRouter.RouterState | null = null;

  if (action.type === 'RESET_STORE') {
    //oldRouter = state.router;
    state = undefined;
  }

  let newState = rootReducer(state, action);
  //if (oldRouter) newState.router = oldRouter;

  return newState;
};
