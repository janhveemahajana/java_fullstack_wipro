import { Component } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { Itask } from './itask';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [TaskComponent, TasklistComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TaskAppEx8';
  tasks: Itask[] = [];

  addTask(task: Itask){
    this.tasks.push(task);
  }

  deleteTask(id: number){
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
  
}
