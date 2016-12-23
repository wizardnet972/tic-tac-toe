import { Action } from '@ngrx/store';
import { type } from '../shared/util';

export const ActionTypes = {
  SET_CELL: type('[Board] Set Cell'),
  AI_TURN: type('[Board] AI Turn'),
  MY_TURN: type('[Board] My Turn'),
  RESET_GAME: type('[Board] Reset Game'),
};

export class SetCellAction implements Action {
  type = ActionTypes.SET_CELL;

  constructor(public payload: { in: number, player: string }) { }
}

export class AITurnAction implements Action {
  type = ActionTypes.AI_TURN;

  constructor(public payload?: {}) { }
}

export class MyTurnAction implements Action {
  type = ActionTypes.MY_TURN;

  constructor(public payload: { in: number }) { }
}

export class ResetGameAction implements Action {
  type = ActionTypes.RESET_GAME;

  constructor(public payload?: {}) { }
}

export type Actions
  = MyTurnAction
  | AITurnAction
  | SetCellAction
  | ResetGameAction
  ;
