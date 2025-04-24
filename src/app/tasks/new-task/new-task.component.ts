import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  private taskService = inject(TasksService);

  @Input({ required: true }) userId!: string;
  @Output() cancel = new EventEmitter();
  @Output() create = new EventEmitter<{
    title: string;
    summary: string;
    dueDate: string;
  }>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';


  onCancelAddTask() {
    this.cancel.emit();
  }

  onCreateTask() {
    this.taskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
    }, this.userId);
    this.cancel.emit();
  }

}
