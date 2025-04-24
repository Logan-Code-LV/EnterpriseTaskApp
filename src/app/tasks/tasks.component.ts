import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { CommonModule } from '@angular/common';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './new-task/new-task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, CommonModule, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {

  }
  
  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }
  
  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCreateTask(taskData: NewTaskData) {
    this.tasksService.addTask(taskData, this.userId);
    this.isAddingTask = false;
  }

  onCompleteTask(taskId: string) {
    this.tasksService.completeTask(taskId);
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
}