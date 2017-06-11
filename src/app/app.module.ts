import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BoardComponent } from './features/board/board.component';
import { TicTacToeComponent } from './features/tic-tac-toe/tic-tac-toe.component';
import { StoreModule } from '@ngrx/store';

import { reducer } from './shared/store';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { BoardEffects } from './shared/store/board/board.effects';
import { WinningEffects } from './shared/store/winning/winning.effects';

const NGRX_IMPORTS = [
  StoreModule.provideStore(reducer),
  // RouterStoreModule.connectRouter(),
  StoreDevtoolsModule.instrumentOnlyWithExtension(),
];

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    TicTacToeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ...NGRX_IMPORTS,

    EffectsModule.run(BoardEffects),
    EffectsModule.run(WinningEffects),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
