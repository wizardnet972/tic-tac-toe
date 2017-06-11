import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { State } from 'app/shared/store';
import { getBoardCells, getWinner } from '../../shared/store';
import * as fromBoard from 'app/shared/store/board/board.actions';
import { WinningModes } from 'app/shared/winner.service';

import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
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
