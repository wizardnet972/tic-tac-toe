import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { mergeEffects } from '@ngrx/effects';

@Injectable()
export class EffectsHelper {
  effects: any[] = [];

  constructor(
    private store: Store<any>) { }

  add(effects: any[]): void {
    let storeEffects = this.effects;

    effects
      .filter(effect => !this.exist(effect))
      .forEach(effect => {
        mergeEffects(effect).subscribe(this.store);
        storeEffects.push(this.reflactClassName(effect));
      });
  }

  exist(effect: any): boolean {
    let key = this.reflactClassName(effect);
    return !(this.effects.indexOf(key) === -1);
  }

  reflactClassName(effect: any): string {
    return Object.getPrototypeOf(effect).constructor.name;
  }
}
