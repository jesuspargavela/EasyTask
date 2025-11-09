import { Injectable } from "@angular/core";

import { dummyTasks } from "../dummy-tasks";

import { Assignment } from "./task/task.model";

@Injectable({ providedIn: 'root' })
export class TaskService {
    private tasks = dummyTasks;

    constructor() {
        const tasks = localStorage.getItem('tasks');
        if (tasks) this.tasks = JSON.parse(tasks);
    }

    get taskLength(): number {
        return this.tasks.length;
    }

    getUserTasks(userId: string): Assignment[] {
        return this.tasks.filter(task => task.userId === userId);
    }

    addTask(task: Assignment): void {
        this.tasks.push(task);
        this.saveTask();
    }

    deleteTask(id: string): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveTask();
    }

    private saveTask(): void {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}
