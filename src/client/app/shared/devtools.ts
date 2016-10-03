import { Component } from '@angular/core';

@Component({
  selector: 'dev-tools',
  template: `
    <ngrx-store-log-monitor toggleCommand="ctrl-t" positionCommand="ctrl-m"></ngrx-store-log-monitor>
  `
})
export class DevtoolsComponent { }
