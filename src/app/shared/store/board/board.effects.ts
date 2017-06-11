import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs/observable/of';

import { State } from '../index';
import { whatTheNextMove } from '../../ai.service';

import * as fromBoard from '../board/board.actions';
import * as fromWinning from '../winning/winning.actions';

import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class BoardEffects {

    @Effect()
    myTurn$ = this.actions$
        .ofType(fromBoard.ActionTypes.MY_TURN)
        .withLatestFrom(this.store)
        .filter(([, store]) => !store.board.turn)
        .map(([action, store]) => new fromBoard.SetCellAction({ in: action.payload.in, player: store.board.human }));

    @Effect()
    setCell$ = this.actions$
        .ofType(fromBoard.ActionTypes.SET_CELL)
        .map(() => new fromWinning.CheckWinningAction());

    @Effect()
    aiTurn$ = this.actions$
        .ofType(fromBoard.ActionTypes.AI_TURN)
        .withLatestFrom(this.store)
        .filter(([, store]) => !!store.board.turn)
        .map(([, store]) => store.board)
        .map(board => new fromBoard.SetCellAction({ in: whatTheNextMove(board.cells, board.human), player: board.ai }));

    @Effect()
    resetGame$ = this.actions$
        .ofType(fromBoard.ActionTypes.RESET_GAME)
        .switchMap(() => of({ type: 'RESET_STORE' }));

    constructor(
        private store: Store<State>,
        private actions$: Actions
    ) { }
}