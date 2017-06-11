import { compose } from '@ngrx/core/compose';
import { storeLogger } from 'ngrx-store-logger';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';
import { environment } from 'environments/environment';
import { createSelector } from 'reselect';

import * as fromBoard from './board/board.reducer';
import * as fromWinning from './winning/winning.reducer';

/* Selectors */
export const getBoardState = (state: State) => state.board;
export const getWinningState = (state: State) => state.winning;
export const getBoardCells = createSelector(getBoardState, fromBoard.getCells);
export const getWinner = createSelector(getWinningState, fromWinning.getWinner);

export interface State {
  board: fromBoard.State;
  winning: fromWinning.State;
}

const reducers = {
  board: fromBoard.reducer,
  winning: fromWinning.reducer,
};

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



