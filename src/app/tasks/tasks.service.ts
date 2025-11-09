import { Injectable } from "@angular/core";

import { dummyTasks } from "../dummy-tasks";

import { Assignment } from "./task/task.model";

@Injectable({ providedIn: 'root' })
export class TaskService {
    private tasks = dummyTasks;

    get taskLength(): number {
        return this.tasks.length;
    }

    getUserTasks(userId: string): Assignment[] {
        return this.tasks.filter(task => task.userId === userId);
    }

    addTask(task: Assignment): void {
        this.tasks.push(task);
    }

    deleteTask(id: string): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
}
