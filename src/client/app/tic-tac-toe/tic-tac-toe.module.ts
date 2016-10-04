import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { routing } from './tic-tac-toe.routing';
import { TicTacToeContainer } from './containers/tic-tac-toe.container';
import { BoardComponent } from './components/board.component';
import { BoardEffects } from './effects/board.effects';
import { WinningEffects } from './effects/winning.effects';

let effects = [
    BoardEffects,
    WinningEffects,
];

let components = [
    TicTacToeContainer,
    BoardComponent
];

@NgModule({
    imports: [
        CommonModule,
        routing,
        effects.map(effect => EffectsModule.run(effect)),
    ],
    declarations: components
})
export default class TicTacToeModule { }
