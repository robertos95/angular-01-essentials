import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTask>();

  // Using signal for 2 ways binding
  // enteredTitle = signal('');

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
    });
  }
}
