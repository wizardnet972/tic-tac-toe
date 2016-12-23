import { NgModule, OpaqueToken, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule, Actions, mergeEffects } from '@ngrx/effects';
import { TicTacToeComponent } from './tic-tac-toe.component';
import { BoardComponent } from '../board/board.component';
import { BoardEffects } from '../../board/board.effects';
import { WinningEffects } from '../../winning/winning.effects';
import { TicTacToeRoutingModule } from './tic-tac-toe-routing.module';
import { EffectsHelper } from '../../shared/effects-helper.service';

const EFFECTS = new OpaqueToken('@ngrx/effects');

let components = [
    TicTacToeComponent,
    BoardComponent
];

let providers = [
    Actions,
    { provide: EFFECTS, useClass: BoardEffects, multi: true },
    { provide: EFFECTS, useClass: WinningEffects, multi: true }
];

const imports = [
    CommonModule,
    TicTacToeRoutingModule,
];

@NgModule({
    imports: imports,
    declarations: components,
    providers: providers
})
export class TicTacToeModule {

    constructor(
        @Inject(EFFECTS) effects: any[],
        effectsHelper: EffectsHelper) {

        effectsHelper.add(effects);
    }
}
