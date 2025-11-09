import { Component, Input, ViewChild } from '@angular/core';

import { Dialog } from '../shared/dialog/dialog';

import { Task } from './task/task';
import { TaskDialogContent } from './task-dialog-content/task-dialog-content';

import { Profile } from '../profile.model';
import { Assignment } from './task/task.model';

import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Dialog, Task, TaskDialogContent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) profile!: Profile;

  @ViewChild('taskDialog') taskDialog!: Dialog;

  constructor(private tasksService: TaskService) { }

  get tasksLength(): number {
    return this.tasksService.taskLength;
  }

  get selectedUserTasks(): Assignment[] {
    return this.tasksService.getUserTasks(this.profile.id);
  }

  onShowModal(): void {
    this.taskDialog.showModal();
  }

  onAddTask(task: Assignment): void {
    this.tasksService.addTask(task);
  }

  onDeleteTask(id: string): void {
    this.tasksService.deleteTask(id);
  }
}
