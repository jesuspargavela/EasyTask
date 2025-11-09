import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';
import { DUMMY_USERS } from './dummy-users';
import { NgFor, NgIf } from '@angular/common';
import { Profile } from './profile.model';

@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks, NgFor, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('essentials');
  users = DUMMY_USERS;
  profile!: Profile | null;

  onSelectUser(id: string) {
    this.profile = this.users.find(user => user.id === id) ?? null;
  }
}
