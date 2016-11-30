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
