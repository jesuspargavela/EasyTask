import { Component, signal } from '@angular/core';

import { DUMMY_USERS } from './dummy-users';

import { Profile } from './profile.model';

@Component({
  selector: 'app-root',
  standalone: false,
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
