import { Component, Input } from '@angular/core';
import { User } from '../user';
import { FormsModule } from '@angular/forms';
import { NgIf, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [FormsModule, NgIf, UpperCasePipe],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent {
  @Input() user?: User;
}
