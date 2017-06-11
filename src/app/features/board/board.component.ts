import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardComponent {
  @Input() public cells: string[] = [];

  @Output() cell = new EventEmitter();
  @Output() reset = new EventEmitter();

  onCellClick(event: MouseEvent) {
    const target = <Element>(event.target || event.srcElement || event.currentTarget);
    const cell = target.getAttribute('data-cell');

    if (target.textContent !== '') {
      return;
    }

    this.cell.emit(parseInt(cell, 10));
  }
}
