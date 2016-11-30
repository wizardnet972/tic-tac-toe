import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { TicTacToeComponent } from './tic-tac-toe.component';
import { BoardComponent } from '../board/board.component';
import { BoardEffects } from '../../board/board.effects';
import { WinningEffects } from '../../winning/winning.effects';
import { TicTacToeRoutingModule } from './tic-tac-toe-routing.module';

let effects = [
    BoardEffects,
    WinningEffects,
];

const COMPONENTS = [
    TicTacToeComponent,
    BoardComponent
];

const IMPORTS = [
    CommonModule,
    TicTacToeRoutingModule,
    effects.map(effect => EffectsModule.run(effect)),
]

@NgModule({
    imports: IMPORTS,
    declarations: COMPONENTS
})
export default class TicTacToeModule { }
