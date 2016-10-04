import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/tic-tac-toe/tic-tac-toe.module'
  }
];
