import { compose } from '@ngrx/core/compose';
import { storeLogger } from 'ngrx-store-logger';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

import * as fromRouter from '@ngrx/router-store';
import * as fromApp from './app.store';
import { environment } from 'environments/environment';

export interface State extends fromApp.State {
  some: {};

}

const reducers = Object.assign({}, fromApp.reducers);

const developmentReducer = compose(storeFreeze, storeLogger(), combineReducers)(reducers);
const productionReducer = combineReducers(reducers);

export function rootReducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

export function reducer(state: any, action: any) {

  if (action.type === 'RESET_STORE') {
    state = undefined;
  }

  const newState = rootReducer(state, action);

  return newState;
};
