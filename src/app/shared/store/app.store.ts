import { createSelector } from 'reselect';

import * as fromBoard from './board/board.reducer';
import * as fromWinning from './winning/winning.reducer';

export interface State {
  board: fromBoard.State;
  winning: fromWinning.State;
}

export const reducers = {
  board: fromBoard.reducer,
  winning: fromWinning.reducer,
};

export const getBoardState = (state: State) => state.board;

export const getWinningState = (state: State) => state.winning;

export const getBoardCells = createSelector(getBoardState, fromBoard.getCells);

export const getWinner = createSelector(getWinningState, fromWinning.getWinner);