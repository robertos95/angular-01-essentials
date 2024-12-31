import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
