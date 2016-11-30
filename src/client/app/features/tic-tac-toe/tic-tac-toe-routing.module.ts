import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TicTacToeComponent } from './tic-tac-toe.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: TicTacToeComponent }
    ])
  ],
  exports: [RouterModule]
})
export class TicTacToeRoutingModule { }
