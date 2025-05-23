import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() userSelected = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  userClicked() {
    this.userSelected.emit(this.user.id);
  }
}