import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { BoardComponent } from './features/board/board.component';
import { TicTacToeComponent } from './features/tic-tac-toe/tic-tac-toe.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './shared/store';

import { BoardEffects } from './shared/store/board/board.effects';
import { WinningEffects } from './shared/store/winning/winning.effects';

const NGRX_IMPORTS = [
  StoreModule.provideStore(reducer),
  StoreDevtoolsModule.instrumentOnlyWithExtension(),
  EffectsModule.run(BoardEffects),
  EffectsModule.run(WinningEffects),
];

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    TicTacToeComponent,
  ],
  imports: [
    BrowserModule,
    ...NGRX_IMPORTS,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
