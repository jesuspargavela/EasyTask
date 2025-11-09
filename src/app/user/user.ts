import { Component, EventEmitter, Input, Output, /* input, computed, signal, output */ } from '@angular/core';
import { UserObject } from './user.model';

/* import { DUMMY_USERS } from '../dummy-users';*/
//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  /* @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string; */
  @Input({ required: true }) user!: UserObject;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  /* selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => '../../assets/users/' + this.selectedUser().avatar); */
  /* avatar = input.required<string>();
  name = input.required<string>(); */
  //select = output<string>();

  get imagePath(): string {
    return '../../assets/users/' + this.user.avatar;
  }

  /*  imagePath = computed(() => '../../assets/users/' + this.avatar()); */

  onSelectUser(): void {
    this.select.emit(this.user.id);
  }
}
