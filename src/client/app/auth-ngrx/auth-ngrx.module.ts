import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthNgrxComponent } from './auth-ngrx.component';
import { AuthNgrxEffects } from './auth-ngrx.effects';
import { EffectsModule } from '@ngrx/effects';

let effects = [
    AuthNgrxEffects,
];

@NgModule({
    imports: [
        CommonModule,
        effects.map(effect => EffectsModule.run(effect)),
    ],
    declarations: [AuthNgrxComponent],
    exports: [AuthNgrxComponent],
})

export class AuthNgrxModule { }
