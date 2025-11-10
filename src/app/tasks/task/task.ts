import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Assignment } from './task.model';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: Assignment;
  @Output() delete = new EventEmitter<string>();

  onDeleteTask(): void {
    this.delete.emit(this.task.id);
  }
}
