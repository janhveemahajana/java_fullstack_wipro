import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Itask } from '../itask';

@Component({
  selector: 'app-task',
  imports: [FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  description: string = '';
  category: string = '';
  idIncre = 1;

  @Output() taskAdded = new EventEmitter<Itask>();

  addTask() {
    if (this.description && this.category) {
      const newTask: Itask = {
        id: this.idIncre++,
        description: this.description,
        category: this.category
      };
      this.taskAdded.emit(newTask);
      this.description = '';
      this.category = '';
    }
  }
}
