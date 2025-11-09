import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Assignment } from './task.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [DatePipe],
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
