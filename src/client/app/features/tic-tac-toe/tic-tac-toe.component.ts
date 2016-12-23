import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { WinningModes } from '../../shared/services/winner.service';
import { State } from '../../shared/store';
import { getBoardCells, getWinner } from '../../app.store';

import * as fromBoard from '../../board/board.actions';

@Component({
  moduleId: module.id,
  selector: 'tic-tac-toe',
  templateUrl: 'tic-tac-toe.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicTacToeComponent {

  public cells$: Observable<string[]>;

  constructor(
    public store: Store<State>) {

    this.cells$ = store.select(getBoardCells);

    store.select(getWinner)
      .distinctUntilChanged()
      .filter(winner => !!winner)
      .debounceTime(500)
      .subscribe(winner => this.winning(winner));
  }

  update(cell: number) {
    this.store.dispatch(new fromBoard.MyTurnAction({ in: cell }));
  }

  winning(winner: WinningModes) {

    switch (winner) {
      case WinningModes.Draw: alert('it is a draw!'); break;
      case WinningModes.Win: alert('you win! :) '); break;
      case WinningModes.Lose: alert('you lose! :( '); break;
    }

    this.reset();
  }

  reset() {
    this.store.dispatch(new fromBoard.ResetGameAction());
  }
}
