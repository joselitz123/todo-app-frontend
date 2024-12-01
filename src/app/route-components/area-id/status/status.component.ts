import { Component, input, signal } from '@angular/core';
import {A11yModule} from '@angular/cdk/a11y'
import { StatusType } from '../../../generic';
import { NgStyle, TitleCasePipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { LabelFieldComponent } from './label-field/label-field.component';
import { DueFieldComponent } from './due-field/due-field.component';
import { AsssignedFieldComponent } from './asssigned-field/asssigned-field.component';

@Component({
  selector: 'app-status',
  imports: [TitleCasePipe, NgStyle, A11yModule, LabelFieldComponent, DueFieldComponent, AsssignedFieldComponent],
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
