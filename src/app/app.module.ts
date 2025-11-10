import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { SharedModule } from "./shared/shared.module";
import { TaskModule } from "./tasks/tasks.module";

import { App } from "./app";
import { Header } from "./header/header";
import { User } from "./user/user";

@NgModule({
    declarations: [App, Header, User],
    bootstrap: [App],
    imports: [BrowserModule, SharedModule, TaskModule]
})
export class AppModule { }