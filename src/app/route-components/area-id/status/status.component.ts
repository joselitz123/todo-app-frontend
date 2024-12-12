import { Component, input, signal } from '@angular/core';
import {A11yModule} from '@angular/cdk/a11y'
import { StatusType } from '../../../generic';
import { NgStyle, TitleCasePipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { LabelFieldComponent } from './todo-item/label-field/label-field.component';
import { DueFieldComponent } from './todo-item/due-field/due-field.component';
import { AssignedFieldComponent } from './todo-item/assigned-field/assigned-field.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@Component({
  selector: 'app-status',
  imports: [TitleCasePipe, NgStyle, TodoItemComponent ],
  templateUrl: './status.component.html',
  styles: ``,
  providers: []
})
export class StatusComponent {

    status = input<StatusType>();
    showAddTodoField = signal<boolean>(false);

    todoField = new FormControl('');


    toggleAddTodoField() {
        this.showAddTodoField.set(!this.showAddTodoField());
    }
    

}
