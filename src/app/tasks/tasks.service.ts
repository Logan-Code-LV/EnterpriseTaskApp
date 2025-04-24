import { NewTaskData } from './new-task/new-task.model';
import { Task } from './task/task.model';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class TasksService {
    private tasks: Task[] = [
        {
          id: 't1',
          userId: 'u1',
          title: 'Master Angular',
          summary: 'Learn Angular from scratch',
          dueDate: '2025-12-31',
        },
        {
          id: 't2',
          userId: 'u2',
          title: 'Master React',
          summary: 'Learn React from scratch',
          dueDate: '2025-12-31',
        },
        {
          id: 't3',
          userId: 'u1',
          title: 'Master Vue',
          summary: 'Learn Vue from scratch',
          dueDate: '2025-12-31',
        },
      ];
      

      getUserTasks(userId: string) {
        return this.tasks.filter((task) => task.userId === userId);
      }

      addTask(taskData: NewTaskData, userId: string) {
        const newTask: Task = {
          id: new Date().getTime().toString(),
          userId: userId,
          ...taskData,
        };
        this.tasks.push(newTask);
      }

      completeTask(taskId: string) {
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
      }
}