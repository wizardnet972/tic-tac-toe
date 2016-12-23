import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';
import { Store } from '@ngrx/store';
import { State } from '../shared/store';
import { checkForWinning, WinningModes } from '../shared/services/winner.service';

import * as fromWinning from './winning.actions';
import * as fromBoard from '../board/board.actions';

@Injectable()
export class WinningEffects {

    @Effect()
    checkWinning$ = this.actions$
        .ofType(fromWinning.ActionTypes.CHECK_WINNING)
        .withLatestFrom(this.store)
        .map(([, store]) => store.board)
        .switchMap(board => {

            let winner = checkForWinning([board.human, board.ai], board.cells);

            if (winner !== WinningModes.None) {
                switch (winner) {
                    case WinningModes.Draw: return of(new fromWinning.DrawAction());
                    case board.ai: return of(new fromWinning.LoseAction());
                    case board.human: return of(new fromWinning.WinAction({ winner }));
                }
            }

            if (board.turn === 1) return of(new fromBoard.AITurnAction());

            return empty(); // do nothing, cancel the effect, do not dispatch another action.
        });

    constructor(
        private store: Store<State>,
        private actions$: Actions
    ) { }
}
