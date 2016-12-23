import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: '/app/features/tic-tac-toe/tic-tac-toe.module#TicTacToeModule'
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

