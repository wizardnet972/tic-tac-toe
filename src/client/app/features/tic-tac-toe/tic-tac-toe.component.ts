import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { WinningModes } from '../../shared/services/winner.service';
import { State } from '../../shared/store';
import * as fromBoard from '../../board/board.actions';

@Component({
  moduleId: module.id,
  selector: 'tic-tac-toe',
  templateUrl: 'tic-tac-toe.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicTacToeComponent {

  private cells: Observable<string[]>;
  private turn: number = 0;

  constructor(
    public store: Store<State>) {

    //TODO: Selectors
    this.cells = store.select(s => s.board.cells);
    store.select(s => s.board.turn).subscribe(turn => this.turn = turn);
    store.select(s => s.winning.winner)
      .filter(winner => !!winner)
      .debounceTime(500)
      .subscribe(this.winning);
  }

  update(cell: number) {
    if (this.turn === 0) {
      this.store.dispatch(new fromBoard.MyTurnAction({ in: cell }));
    }
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
