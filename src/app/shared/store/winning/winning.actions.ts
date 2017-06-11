import { Action } from '@ngrx/store';
import { type } from '../../../shared/util';

export const ActionTypes = {
  CHECK_WINNING:  type('[Winning] Check'),
  WIN:            type('[Winning] Win'),
  LOSE:           type('[Winning] Lose'),
  DRAW:           type('[Winning] Draw'),
};

export class CheckWinningAction implements Action {
  type = ActionTypes.CHECK_WINNING;
}

export class WinAction implements Action {
  type = ActionTypes.WIN;

  constructor(public payload: { winner: any }) { }
}

export class LoseAction implements Action {
  type = ActionTypes.LOSE;
}

export class DrawAction implements Action {
  type = ActionTypes.DRAW;
}

export type Actions
  = CheckWinningAction
  | WinAction
  | LoseAction
  | DrawAction
  ;