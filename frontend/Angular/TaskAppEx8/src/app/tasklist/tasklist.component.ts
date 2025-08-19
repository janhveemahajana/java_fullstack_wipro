import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Itask } from '../itask';

@Component({
  selector: 'app-tasklist',
  imports: [],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TasklistComponent {
  @Input() tasks: Itask[] = [];
  
  @Output() deleteTask = new EventEmitter<number>();

  removeTask(id: number) {
    this.deleteTask.emit(id);
  }
}
