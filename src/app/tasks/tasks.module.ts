import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";

import { Tasks } from "./tasks";
import { Task } from "./task/task";
import { TaskDialogContent } from "./task-dialog-content/task-dialog-content";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [Tasks, Task, TaskDialogContent],
    exports: [Tasks],
    imports: [CommonModule, SharedModule, FormsModule]
})
export class TaskModule { }