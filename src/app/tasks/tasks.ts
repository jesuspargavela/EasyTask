import { Component, Input, ViewChild } from '@angular/core';
import { Dialog } from '../shared/dialog/dialog';
import { Task } from './task/task';
import { dummyTasks } from '../dummy-tasks';
import { Profile } from '../profile.model';
import { TaskDialogContent } from './task-dialog-content/task-dialog-content';
import { Assignment } from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [Dialog, Task, TaskDialogContent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) profile!: Profile;

  @ViewChild('taskDialog') taskDialog!: Dialog;

  tasks = dummyTasks;

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.profile.id);
  }

  onShowModal(): void {
    this.taskDialog.showModal();
  }

  onAddTask(task: Assignment): void {
    this.tasks.push(task);
  }

  onDeleteTask(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
