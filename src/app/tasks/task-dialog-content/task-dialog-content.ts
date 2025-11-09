import {
  Component, EventEmitter, Input, /* signal */
  Output,
  ViewChild
} from '@angular/core';
import { Dialog } from '../../shared/dialog/dialog';
import { Assignment } from '../task/task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-dialog-content',
  imports: [FormsModule],
  templateUrl: './task-dialog-content.html',
  styleUrl: './task-dialog-content.css',
})
export class TaskDialogContent {
  @Input({ required: true }) taskDialog!: Dialog;
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) id!: number;
  @Output() add = new EventEmitter<Assignment>();

  title = '';
  //title = signal('');
  summary = '';
  //summary = signal('');
  date = '';
  //date = signal('');

  onCancel(): void {
    this.taskDialog.closeModal();
  }

  onSubmit(): void {
    this.taskDialog.closeModal();

    const id = ++this.id;

    const task: Assignment = {
      id: 't' + id.toString(),
      userId: this.userId,
      title: this.title,
      summary: this.summary,
      dueDate: this.date
    };


    this.add.emit(task);

    this.title = '';
    this.summary = '';
    this.date = '';
  }
}
