import { Routes, RouterModule }  from '@angular/router';

import { TicTacToeContainer } from './containers/tic-tac-toe.container';

const routes: Routes = [
  {
    path: '',
    component: TicTacToeContainer
  }
];

export const routing = RouterModule.forChild(routes);
