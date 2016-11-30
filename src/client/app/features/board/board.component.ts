import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'board',
  templateUrl: 'board.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BoardComponent {

  @Input() cells: string[] = [];

  @Output() cell = new EventEmitter();
  @Output() reset = new EventEmitter();

  onCellClick(event: MouseEvent) {
    let target = <Element>(event.target || event.srcElement || event.currentTarget);
    let cell = target.getAttribute('data-cell');

    if (target.textContent !== '') return;

    this.cell.emit(parseInt(cell, 10));
  }
}
