import { A11yModule } from '@angular/cdk/a11y';
import { Component, signal } from '@angular/core';
import { LabelFieldComponent } from './label-field/label-field.component';
import { DueFieldComponent } from './due-field/due-field.component';
import { AssignedFieldComponent } from './assigned-field/assigned-field.component';

@Component({
  selector: 'app-todo-item',
  imports: [A11yModule, LabelFieldComponent, DueFieldComponent, AssignedFieldComponent],
  templateUrl: './todo-item.component.html',
  styles: ``
})
export class TodoItemComponent {
    showAddTodoField = signal<boolean>(false);

    toggleAddTodoField() {
        this.showAddTodoField.set(!this.showAddTodoField());
    }
}
