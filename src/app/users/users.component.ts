import { Component } from '@angular/core';
import { User } from '../user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Users } from './mock-users';
import { NgFor } from '@angular/common';
import { UserDetailsComponent } from '../user-details/user-details.component';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor,UserDetailsComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  users = Users;
  selectedUser?: User;
  onSelectUser(user: User): void {
    this.selectedUser = user;
  }
}
